# Group 分组

Group 组件用于将相关元素分组在一起，提供一致的间距和布局。

## 基本使用

```vue
<template>
  <BlinkGroup>
    <BlinkButton>按钮 1</BlinkButton>
    <BlinkButton>按钮 2</BlinkButton>
    <BlinkButton>按钮 3</BlinkButton>
  </BlinkGroup>
</template>

<script setup lang="ts">
import { BlinkGroup, BlinkButton } from '@blink-the-ui/components';
</script>
```

## 垂直分组

垂直排列元素并保持一致的间距。

```vue
<template>
  <BlinkGroup direction="vertical">
    <BlinkButton>按钮 1</BlinkButton>
    <BlinkButton>按钮 2</BlinkButton>
    <BlinkButton>按钮 3</BlinkButton>
  </BlinkGroup>
</template>

<script setup lang="ts">
import { BlinkGroup, BlinkButton } from '@blink-the-ui/components';
</script>
```

## 表单分组

分组表单元素并保持适当的间距。

```vue
<template>
  <BlinkGroup direction="vertical">
    <div>
      <BlinkLabel for="name">姓名</BlinkLabel>
      <BlinkInput id="name" v-model="name" placeholder="请输入您的姓名" />
    </div>

    <div>
      <BlinkLabel for="email">邮箱</BlinkLabel>
      <BlinkInput
        id="email"
        v-model="email"
        type="email"
        placeholder="请输入您的邮箱"
      />
    </div>

    <div>
      <BlinkButton type="submit">提交</BlinkButton>
    </div>
  </BlinkGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  BlinkGroup,
  BlinkLabel,
  BlinkInput,
  BlinkButton,
} from '@blink-the-ui/components';

const name = ref('');
const email = ref('');
</script>
```

## 自定义间距

调整元素之间的间距。

```vue
<template>
  <BlinkGroup :spacing="20">
    <BlinkButton>按钮 1</BlinkButton>
    <BlinkButton>按钮 2</BlinkButton>
    <BlinkButton>按钮 3</BlinkButton>
  </BlinkGroup>
</template>

<script setup lang="ts">
import { BlinkGroup, BlinkButton } from '@blink-the-ui/components';
</script>
```

## API 参考

### Props

| Prop      | 描述                           | 类型                                         | 默认值         |
| --------- | ------------------------------ | -------------------------------------------- | -------------- |
| direction | 布局方向                       | `'horizontal' \| 'vertical'`                 | `'horizontal'` |
| spacing   | 元素之间的间距（以像素为单位） | `number`                                     | `10`           |
| align     | 元素对齐方式（水平方向）       | `'left' \| 'center' \| 'right' \| 'stretch'` | `'left'`       |
| justify   | 元素对齐方式（垂直方向）       | `'top' \| 'center' \| 'bottom' \| 'stretch'` | `'top'`        |

### Slots

| 插槽    | 描述         |
| ------- | ------------ |
| default | 要分组的元素 |

## 最佳实践

1. **一致间距**：使用 Group 在相关元素之间保持一致的间距
2. **逻辑分组**：将逻辑上属于一起的元素分组
3. **方向选择**：根据布局需求选择适当的方向
4. **响应式设计**：考虑分组在不同屏幕尺寸上的显示效果
5. **嵌套分组**：对具有多个对齐要求的复杂布局使用嵌套分组

## 无障碍性

- Group 组件没有特定的无障碍问题
- 正确分组相关元素，有助于屏幕阅读器导航
- 保持一致的间距，提高可读性
