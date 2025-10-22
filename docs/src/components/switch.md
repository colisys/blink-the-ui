# Switch 开关

Switch 组件用于在两种状态之间切换，通常是开和关。

## 基本使用

```vue
<template>
  <BlinkSwitch v-model="switchValue" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkSwitch } from '@blink-the-ui/components';

const switchValue = ref(false);
</script>
```

## 带标签

使用 Switch 与标签一起使用以提供更好的上下文。

```vue
<template>
  <div>
    <BlinkSwitch v-model="notifications" />
    <BlinkLabel for="notifications">启用通知</BlinkLabel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkSwitch, BlinkLabel } from '@blink-the-ui/components';

const notifications = ref(true);
</script>
```

## 禁用状态

禁用开关以防止用户交互。

```vue
<template>
  <BlinkSwitch v-model="value" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkSwitch } from '@blink-the-ui/components';

const value = ref(false);
</script>
```

## 尺寸

开关有不同的尺寸以匹配其他表单元素。

```vue
<template>
  <div>
    <BlinkSwitch v-model="small" size="small" />
    <BlinkSwitch v-model="medium" size="medium" />
    <BlinkSwitch v-model="large" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkSwitch } from '@blink-the-ui/components';

const small = ref(false);
const medium = ref(false);
const large = ref(false);
</script>
```

## 自定义颜色

自定义开关颜色以匹配您的设计。

```vue
<template>
  <BlinkSwitch v-model="value" active-color="#42b883" inactive-color="#ccc" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkSwitch } from '@blink-the-ui/components';

const value = ref(true);
</script>
```

## API 参考

### Props

| Prop          | 描述               | 类型                             | 默认值      |
| ------------- | ------------------ | -------------------------------- | ----------- |
| modelValue    | 开关值 (v-model)   | `boolean`                        | `false`     |
| disabled      | 开关是否禁用       | `boolean`                        | `false`     |
| size          | 开关尺寸           | `'small' \| 'medium' \| 'large'` | `'medium'`  |
| activeColor   | 激活时的背景颜色   | `string`                         | `undefined` |
| inactiveColor | 未激活时的背景颜色 | `string`                         | `undefined` |

### Events

| 事件              | 描述             | 参数      |
| ----------------- | ---------------- | --------- |
| update:modelValue | 开关值变化时触发 | `boolean` |
| change            | 开关值变化时触发 | `boolean` |

### Slots

| 插槽         | 描述                   |
| ------------ | ---------------------- |
| activeIcon   | 开关激活时显示的图标   |
| inactiveIcon | 开关未激活时显示的图标 |

## 最佳实践

1. **清晰标记**：始终提供清楚标明开关控制内容的标签
2. **立即生效**：开关通常应该有立即生效的效果，而不是需要表单提交
3. **一致定位**：在整个应用程序中一致地放置开关
4. **无障碍性**：确保开关支持键盘访问并正确标记
5. **确认**：对于破坏性操作，考虑使用带确认的复选框而不是开关

## 无障碍性

- 开关可通过键盘聚焦，并且可以使用 Space 或 Enter 键切换
- 自动应用适当的 ARIA 属性（[role="switch"](file:///home/helix/blink-the-ui/node_modules/.pnpm/@types+aria-query@5.0.4/node_modules/@types/aria-query/index.d.ts#L46-L46), `aria-checked`）
- 颜色对比度符合 WCAG 2.1 AA 标准
- 与屏幕阅读器配合使用，宣布状态变化
