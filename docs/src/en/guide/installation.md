# Installation

Learn how to install and set up Blink UI in your project.

## Prerequisites

Blink UI requires Vue 3.x to be installed in your project. If you haven't already set up a Vue 3 project, you can create one using Vite:

```bash
npm create vue@latest my-project
cd my-project
npm install
```

## Installation

You can install Blink UI using your preferred package manager:

### Using npm

```bash
npm install @blink-the-ui/components
```

### Using yarn

```bash
yarn add @blink-the-ui/components
```

### Using pnpm

```bash
pnpm add @blink-the-ui/components
```

## Usage

There are several ways to use Blink UI components in your application:

### Global Registration

To register all components globally, you can import and install the plugin in your main application file:

```ts
import { createApp } from 'vue';
import App from './App.vue';
import BlinkUI from '@blink-the-ui/components';
import '@blink-the-ui/components/style.css';

const app = createApp(App);
app.use(BlinkUI);
app.mount('#app');
```

### Individual Component Registration

If you only need specific components, you can import them individually:

```vue
<template>
  <BlinkButton @click="handleClick">Click me</BlinkButton>
</template>

<script setup lang="ts">
import { BlinkButton } from '@blink-the-ui/components';
import '@blink-the-ui/components/style.css';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

### On-Demand Import (Recommended)

For better tree-shaking and smaller bundle size, import components only when needed:

```vue
<template>
  <BlinkButton variant="primary">Primary Button</BlinkButton>
</template>

<script setup lang="ts">
import { BlinkButton } from '@blink-the-ui/components/button';
import '@blink-the-ui/components/button/style.css';
</script>
```

## TypeScript Support

Blink UI ships with TypeScript declarations out of the box. You don't need any additional setup to use it with TypeScript.

## CDN Usage

You can also use Blink UI directly in the browser via CDN:

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
      <blink-button>Button</blink-button>
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

Now that you've installed Blink UI, let's look at how to use the components in the next section.
