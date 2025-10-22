<script lang="ts" setup>
</script>

# Button 按钮

Button 组件用于触发操作或事件，例如提交表单、打开对话框或取消操作。

## 基本使用

使用 `variant` 属性来定义按钮样式。

:::demo

<template>
  <BlinkButton>默认按钮</BlinkButton>
  <BlinkButton variant="primary">主要按钮</BlinkButton>
  <BlinkButton variant="secondary">次要按钮</BlinkButton>
  <BlinkButton variant="danger">危险按钮</BlinkButton>
</template>

<script setup lang="ts">
import { BlinkButton } from '@blink-the-ui/components';
</script>

:::

## 按钮尺寸

:::demo 使用 `size` 属性来定义按钮尺寸，可选值为 `small`、`medium`、`large`。

```vue
<template>
  <BlinkButton size="small">小号按钮</BlinkButton>
  <BlinkButton size="medium">中等按钮</BlinkButton>
  <BlinkButton size="large">大号按钮</BlinkButton>
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

## 加载状态

:::demo 使用 `loading` 属性来定义按钮是否处于加载状态。

```vue
<template>
  <BlinkButton :loading="isLoading" @click="handleClick">
    点击加载
  </BlinkButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkButton } from '@blink-the-ui/components';

const isLoading = ref(false);

const handleClick = () => {
  isLoading.value = true;
  // 模拟异步操作
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>
```

:::

## 图标按钮

:::demo 按钮可以包含图标以获得更好的视觉表现。

```vue
<template>
  <div>
    <BlinkButton icon="search">搜索</BlinkButton>
    <BlinkButton icon="heart" variant="danger" />
  </div>
</template>
```

:::

## API 参考

### Props

| Prop     | 描述             | 类型                                                | 默认值      |
| -------- | ---------------- | --------------------------------------------------- | ----------- |
| variant  | 按钮样式变体     | `'default' \| 'primary' \| 'secondary' \| 'danger'` | `'default'` |
| size     | 按钮尺寸         | `'small' \| 'medium' \| 'large'`                    | `'medium'`  |
| disabled | 按钮是否禁用     | `boolean`                                           | `false`     |
| loading  | 是否显示加载状态 | `boolean`                                           | `false`     |
| icon     | 要显示的图标名称 | `string`                                            | `undefined` |

### Events

| 事件  | 描述             | 参数         |
| ----- | ---------------- | ------------ |
| click | 按钮被点击时触发 | `MouseEvent` |

### Slots

| 插槽    | 描述           |
| ------- | -------------- |
| default | 按钮的内容     |
| icon    | 自定义图标内容 |

## 最佳实践

1. **一致使用**：在整个应用程序中对相似操作使用相同的变体
2. **清晰标签**：使用描述性文本清楚地指示操作
3. **适当尺寸**：选择适合上下文和周围元素的按钮尺寸
4. **无障碍性**：确保按钮具有适当的对比度并且支持键盘导航
5. **加载状态**：始终为耗时操作显示加载指示器

## 无障碍性

- 按钮可通过键盘聚焦，并且可以使用 Enter 或 Space 键激活
- 自动应用适当的 ARIA 属性
- 颜色对比度符合 WCAG 2.1 AA 标准
