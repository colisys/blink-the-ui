# Button 按钮

Button 组件用于触发操作或事件，例如提交表单、打开对话框或取消操作。

## 基本使用

:::demo 使用 `visual` 属性来定义按钮样式。

```vue
<template>
  <div style="display: flex; gap: 8px;">
    <BlinkButton @click="handleClickDefault">默认按钮</BlinkButton>
    <BlinkButton visual="primary">主要按钮</BlinkButton>
    <BlinkButton visual="warning">警告按钮</BlinkButton>
    <BlinkButton visual="danger">危险按钮</BlinkButton>
  </div>
</template>

<script setup lang="ts">
import { BlinkButton } from '@blink-the-ui/components';
const handleClickDefault = () => {
  console.log('点击了默认按钮');
};
</script>
```

:::

## 按钮尺寸

:::demo 使用 `size` 属性来定义按钮尺寸，可选值为 `sm`、`md`、`lg`。

```vue
<template>
  <div style="display: flex; gap: 8px; align-items: center;">
    <BlinkButton size="xs">超小号按钮</BlinkButton>
    <BlinkButton size="sm">小号按钮</BlinkButton>
    <BlinkButton size="md">中等按钮</BlinkButton>
    <BlinkButton size="lg">大号按钮</BlinkButton>
  </div>
</template>
```

:::

## 禁用状态

:::demo 使用 `disabled` 属性来定义按钮是否禁用。

```vue
<template>
  <BlinkButton disabled>禁用按钮</BlinkButton>
</template>
```

:::
