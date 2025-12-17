#!/bin/bash

# pnpm 安装依赖修复脚本
# 解决 EAGAIN 错误

set -e

MAX_RETRIES=10
RETRY_DELAY=5

echo "🔧 配置 pnpm 设置..."
# 设置低并发以避免 EAGAIN 错误
pnpm config set fetch-concurrency 3 2>/dev/null || true
pnpm config set network-concurrency 1 2>/dev/null || true
pnpm config set child-concurrency 1 2>/dev/null || true
# 切换到国内镜像源以提高下载稳定性
pnpm config set registry https://registry.npmmirror.com 2>/dev/null || true

echo "🧹 清理缓存和临时文件..."
rm -rf node_modules .pnpm-store 2>/dev/null || true
find . -name "*_tmp_*" -type f -delete 2>/dev/null || true
pnpm store prune 2>&1 | tail -3 || true

echo "📦 开始安装依赖（最多重试 $MAX_RETRIES 次）..."

for i in $(seq 1 $MAX_RETRIES); do
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "🔄 尝试第 $i/$MAX_RETRIES 次安装..."
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  
  # 清理临时文件
  find node_modules -name "*_tmp_*" -type f -delete 2>/dev/null || true
  
  if pnpm install --network-concurrency=1 --child-concurrency=1 --prefer-offline --no-frozen-lockfile 2>&1 | tee /tmp/pnpm-install.log; then
    echo ""
    echo "✅ ✅ ✅ 依赖安装成功！ ✅ ✅ ✅"
    exit 0
  else
    EXIT_CODE=$?
    if [ $i -lt $MAX_RETRIES ]; then
      echo ""
      echo "❌ 安装失败（退出码: $EXIT_CODE），等待 ${RETRY_DELAY} 秒后重试..."
      echo "💡 提示: 如果持续失败，可能是文件系统或网络问题"
      sleep $RETRY_DELAY
      
      # 清理可能损坏的文件
      find node_modules -name "*_tmp_*" -type d -exec rm -rf {} + 2>/dev/null || true
      find node_modules -name "*_tmp_*" -type f -delete 2>/dev/null || true
    else
      echo ""
      echo "❌ ❌ ❌ 经过 $MAX_RETRIES 次尝试后仍然失败 ❌ ❌ ❌"
      echo ""
      echo "💡 建议尝试以下方法："
      echo "   1. 检查磁盘空间: df -h"
      echo "   2. 检查文件权限: ls -la node_modules"
      echo "   3. 尝试使用 npm: npm install"
      echo "   4. 检查是否有其他进程占用文件"
      echo ""
      exit 1
    fi
  fi
done

