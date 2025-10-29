# Blink The UI

一个简洁的 Vue 3 组件库，基于 TypeScript 和 Vite 构建。

## 特性

- 🧩 丰富的组件集合
- ⚡ 基于 Vite 构建，速度快
- 📘 使用 TypeScript 编写，提供完整的类型定义
- 🎨 可定制主题
- 📱 响应式设计

## 包含的模块

- [@blink-the-ui/components](./packages/components) - 核心 UI 组件
- [@blink-the-ui/layout](./packages/layout) - 布局组件
- [@blink-the-ui/animations](./packages/animations) - 动画组件
- [@blink-the-ui/icons](./packages/icons) - 图标组件
- [@blink-the-ui/overlays](./packages/overlays) - 浮层组件
- [@blink-the-ui/directives](./packages/directives) - Vue 指令集
- [@blink-the-ui/i18n](./packages/i18n) - 国际化支持

## 安装

```bash
npm install @blink-the-ui/components
```

或者使用 pnpm/yarn:

```bash
pnpm add @blink-the-ui/components
```

## 使用

```vue
<template>
  <Button @click="handleClick">Hello World</Button>
</template>

<script setup>
import { Button } from '@blink-the-ui/components';
const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建所有包
pnpm dist:all
```

## 许可证

[MIT](./LICENSE)
