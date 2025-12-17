#!/bin/bash

# pnpm 安装依赖重试脚本
# 解决 EAGAIN 错误

set -e

MAX_RETRIES=5
RETRY_DELAY=3

echo "开始安装依赖..."

for i in $(seq 1 $MAX_RETRIES); do
  echo "尝试第 $i 次安装..."
  
  if pnpm install --network-concurrency=1 --child-concurrency=1 --prefer-offline; then
    echo "✅ 依赖安装成功！"
    exit 0
  else
    if [ $i -lt $MAX_RETRIES ]; then
      echo "❌ 安装失败，等待 ${RETRY_DELAY} 秒后重试..."
      sleep $RETRY_DELAY
      # 清理可能损坏的文件
      find node_modules -name "*_tmp_*" -type f -delete 2>/dev/null || true
    else
      echo "❌ 经过 $MAX_RETRIES 次尝试后仍然失败"
      exit 1
    fi
  fi
done

