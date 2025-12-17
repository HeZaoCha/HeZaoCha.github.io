# 依赖安装问题解决方案

## 问题描述

在使用 `pnpm install` 安装依赖时，可能会遇到以下错误：

```
ERR_PNPM_EAGAIN  EAGAIN: resource temporarily unavailable, copyfile
```

这是一个文件系统资源暂时不可用的错误，通常由以下原因引起：
- 并发请求过多
- 文件系统 I/O 压力过大
- 网络连接不稳定
- 缓存文件损坏

## 解决方案

### 方法一：使用修复脚本（推荐）

运行修复脚本，它会自动配置并重试安装：

```bash
chmod +x install-deps-fixed.sh
./install-deps-fixed.sh
```

### 方法二：手动配置

1. **设置低并发配置**：
```bash
pnpm config set fetch-concurrency 3
pnpm config set network-concurrency 1
pnpm config set child-concurrency 1
```

2. **切换到国内镜像源**（可选，但推荐）：
```bash
pnpm config set registry https://registry.npmmirror.com
```

3. **清理缓存**：
```bash
pnpm store prune
rm -rf node_modules
```

4. **重新安装**：
```bash
pnpm install --network-concurrency=1 --child-concurrency=1
```

### 方法三：使用 npm 作为备选

如果 pnpm 持续失败，可以临时使用 npm：

```bash
npm install
```

注意：使用 npm 后，需要删除 `pnpm-lock.yaml` 文件，并确保 `.gitignore` 中包含 `package-lock.json`。

## 已应用的修复

项目已配置以下设置来解决 EAGAIN 错误：

1. ✅ 低并发配置（fetch-concurrency: 3）
2. ✅ 国内镜像源（registry.npmmirror.com）
3. ✅ 自动重试脚本（install-deps-fixed.sh）

## 验证安装

安装成功后，可以运行以下命令验证：

```bash
# 检查依赖
pnpm list --depth=0

# 运行开发服务器
pnpm dev

# 运行构建
pnpm build
```

## 其他建议

如果问题仍然存在，可以尝试：

1. **检查磁盘空间**：
```bash
df -h
```

2. **检查文件权限**：
```bash
ls -la node_modules
```

3. **检查是否有进程占用文件**：
```bash
lsof +D node_modules
```

4. **更新 pnpm 到最新版本**：
```bash
npm install -g pnpm@latest
```

## 相关资源

- [pnpm 官方文档](https://pnpm.io/)
- [npm 镜像源](https://npmmirror.com/)

