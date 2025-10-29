# @blink-the-ui/icons

Blink UI 图标组件库，提供常用的 SVG 图标。

## 安装

```bash
npm install @blink-the-ui/icons
```

## 使用

```vue
<template>
  <Icon>
    <TimesIcon />
  </Icon>
</template>

<script setup>
import { Icon } from '@blink-the-ui/icons';
import { TimesIcon } from '@blink-the-ui/icons';
</script>
```

## 可用图标

目前包含以下图标组件：

- `TimesIcon` - 关闭图标

## 自定义图标

你可以通过 [Icon](./src/component/Icon.vue) 组件包装自己的 SVG 图标：

```vue
<template>
  <Icon>
    <!-- 你的 SVG 图标 -->
    <svg>...</svg>
  </Icon>
</template>

<script setup>
import { Icon } from '@blink-the-ui/icons';
</script>
```

## 许可证

[MIT](../../../LICENSE)
