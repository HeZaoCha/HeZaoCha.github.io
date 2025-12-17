# ESLint 9 升级指南

## 概述

本指南将帮助您将项目从 ESLint 8.57.1 升级到 ESLint 9.x，并迁移到新的 flat config 格式。

## 升级步骤

### 步骤 1: 升级依赖

```bash
pnpm add -D eslint@^9.39.1
pnpm add -D @typescript-eslint/eslint-plugin@^7.0.0
pnpm add -D @typescript-eslint/parser@^7.0.0
```

### 步骤 2: 创建新的配置文件

创建 `eslint.config.js`（flat config 格式）：

```javascript
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  // 忽略文件
  {
    ignores: ['dist', 'node_modules', 'coverage', '*.local'],
  },
  // JavaScript/TypeScript 文件配置
  {
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
      },
      globals: {
        // 浏览器环境
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        // Node.js 环境
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      vue: vuePlugin,
    },
    rules: {
      // ESLint 推荐规则
      ...js.configs.recommended.rules,
      // TypeScript 推荐规则
      ...tsPlugin.configs.recommended.rules,
      // Vue 推荐规则
      ...vuePlugin.configs['vue3-essential'].rules,
      // 自定义规则
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
];
```

### 步骤 3: 删除旧配置文件

```bash
rm .eslintrc.cjs
```

### 步骤 4: 更新 package.json 脚本

```json
{
  "scripts": {
    "lint": "eslint . --fix",
    "lint:check": "eslint ."
  }
}
```

### 步骤 5: 测试

```bash
# 运行 lint 检查
pnpm lint

# 运行类型检查
pnpm type-check
```

## 注意事项

1. **Flat Config 格式**：ESLint 9 使用新的 flat config 格式（`eslint.config.js`），不再支持旧的 `.eslintrc.*` 格式。

2. **插件导入**：在新格式中，插件需要作为对象导入，而不是字符串。

3. **规则合并**：使用展开运算符（`...`）来合并多个配置的规则。

4. **环境变量**：`process.env` 在配置文件中可能不可用，需要从外部传入或使用其他方式。

## 回滚方案

如果升级后出现问题，可以：

1. 恢复 `.eslintrc.cjs` 文件
2. 降级 ESLint 版本：
   ```bash
   pnpm add -D eslint@^8.57.1
   ```

## 参考资源

- [ESLint 9 迁移指南](https://eslint.org/docs/latest/use/migrate-to-9.0.0)
- [Flat Config 文档](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [Vue ESLint Plugin](https://eslint.vuejs.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)

