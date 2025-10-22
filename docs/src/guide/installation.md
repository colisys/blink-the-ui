# 安装

学习如何在您的项目中安装和设置 Blink UI。

## 前置要求

Blink UI 需要在您的项目中安装 Vue 3.x。如果您还没有设置 Vue 3 项目，可以使用 Vite 创建一个：

```bash
npm create vue@latest my-project
cd my-project
npm install
```

## 安装

您可以使用您喜欢的包管理器安装 Blink UI：

### 使用 npm

```bash
npm install @blink-the-ui/components
```

### 使用 yarn

```bash
yarn add @blink-the-ui/components
```

### 使用 pnpm

```bash
pnpm add @blink-the-ui/components
```

## 使用

有几种方式可以在您的应用程序中使用 Blink UI 组件：

### 全局注册

要全局注册所有组件，您可以导入并在主应用程序文件中安装插件：

```ts
import { createApp } from 'vue';
import App from './App.vue';
import BlinkUI from '@blink-the-ui/components';
import '@blink-the-ui/components/style.css';

const app = createApp(App);
app.use(BlinkUI);
app.mount('#app');
```

### 单个组件注册

如果您只需要特定组件，可以单独导入它们：

```vue
<template>
  <BlinkButton @click="handleClick">点击我</BlinkButton>
</template>

<script setup lang="ts">
import { BlinkButton } from '@blink-the-ui/components';
import '@blink-the-ui/components/style.css';

const handleClick = () => {
  console.log('按钮被点击了!');
};
</script>
```

### 按需导入（推荐）

为了更好的摇树优化和更小的打包体积，请在需要时导入组件：

```vue
<template>
  <BlinkButton variant="primary">主要按钮</BlinkButton>
</template>

<script setup lang="ts">
import { BlinkButton } from '@blink-the-ui/components/button';
import '@blink-the-ui/components/button/style.css';
</script>
```

## TypeScript 支持

Blink UI 开箱即用地提供 TypeScript 声明。您无需任何额外设置即可在 TypeScript 中使用。

## CDN 使用

您也可以通过 CDN 直接在浏览器中使用 Blink UI：

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@blink-the-ui/components/style.css"
    />
  </head>
  <body>
    <div id="app">
      <blink-button>按钮</blink-button>
    </div>
    <script type="module">
      import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.js';
      import BlinkButton from 'https://cdn.jsdelivr.net/npm/@blink-the-ui/components/button/index.js';

      const app = createApp({});
      app.component('BlinkButton', BlinkButton);
      app.mount('#app');
    </script>
  </body>
</html>
```

现在您已经安装了 Blink UI，让我们在下一节中看看如何使用这些组件。
