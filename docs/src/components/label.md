# Label 标签

Label 组件用于将文本与表单元素关联，提高无障碍性和可用性。

## 基本使用

```vue
<template>
  <div>
    <BlinkLabel for="username">用户名</BlinkLabel>
    <BlinkInput id="username" v-model="username" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkLabel, BlinkInput } from '@blink-the-ui/components';

const username = ref('');
</script>
```

## 必填指示器

显示必填字段的视觉指示器。

```vue
<template>
  <div>
    <BlinkLabel for="email" required>邮箱</BlinkLabel>
    <BlinkInput id="email" v-model="email" type="email" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkLabel, BlinkInput } from '@blink-the-ui/components';

const email = ref('');
</script>
```

## 标签变体

不同样式的标签适用于各种上下文。

```vue
<template>
  <div>
    <BlinkLabel variant="default" for="input1">默认标签</BlinkLabel>
    <BlinkInput id="input1" v-model="input1" />

    <BlinkLabel variant="secondary" for="input2">次要标签</BlinkLabel>
    <BlinkInput id="input2" v-model="input2" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkLabel, BlinkInput } from '@blink-the-ui/components';

const input1 = ref('');
const input2 = ref('');
</script>
```

## 内联标签

将标签与表单元素内联显示。

```vue
<template>
  <div style="display: flex; align-items: center; gap: 8px;">
    <BlinkLabel inline for="toggle">启用功能</BlinkLabel>
    <BlinkSwitch id="toggle" v-model="enabled" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkLabel, BlinkSwitch } from '@blink-the-ui/components';

const enabled = ref(false);
</script>
```

## API 参考

### Props

| Prop     | 描述               | 类型                       | 默认值      |
| -------- | ------------------ | -------------------------- | ----------- |
| for      | 关联表单元素的 ID  | `string`                   | `undefined` |
| required | 是否显示必填指示器 | `boolean`                  | `false`     |
| variant  | 标签样式变体       | `'default' \| 'secondary'` | `'default'` |
| inline   | 是否内联显示标签   | `boolean`                  | `false`     |

### Slots

| 插槽    | 描述       |
| ------- | ---------- |
| default | 标签的内容 |

## 最佳实践

1. **始终关联**：始终使用 `for` 属性将标签与表单元素关联
2. **清晰文本**：使用清晰、描述性的文本，表明表单元素的用途
3. **必填字段**：用视觉指示器清楚地标明必填字段
4. **放置位置**：将标签放置在表单元素上方或左侧以获得更好的可用性
5. **对比度**：确保标签文本与背景之间有足够的对比度

## 无障碍性

- 正确的 `for` 和 `id` 关联确保点击标签时聚焦到表单元素
- 当关联的表单元素获得焦点时，屏幕阅读器会正确播报标签
- 必填指示器会被屏幕阅读器播报
- 足够的颜色对比度以确保可读性
- 正确的语义化 HTML 结构
