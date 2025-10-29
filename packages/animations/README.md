# @blink-the-ui/animations

Blink UI 动画组件库，提供多种动画效果。

## 安装

```bash
npm install @blink-the-ui/animations
```

## 使用

```vue
<template>
  <Fade>
    <div v-if="show">淡入淡出动画</div>
  </Fade>

  <HoverFloatUp>
    <Button>悬停浮动动画</Button>
  </HoverFloatUp>
</template>

<script setup>
import { ref } from 'vue';
import { Fade, HoverFloatUp } from '@blink-the-ui/animations';
import { Button } from '@blink-the-ui/components';

const show = ref(true);
</script>
```

## 可用动画

- `Fade` - 淡入淡出动画
- `HoverFloatUp` - 悬停时向上浮动
- `Ripple` - 波纹效果
- `Bubble` - 冒泡动画
- `Stacked` - 堆叠动画

## 许可证

[MIT](../../../LICENSE)
