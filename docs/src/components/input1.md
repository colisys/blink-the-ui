# Input 输入框

Input 组件允许用户以各种格式输入和编辑文本或数值。

## 基本使用

:::demo 使用 `v-model` 实现输入框的双向绑定。

```vue
<template>
  <BlinkInput v-model="inputValue" placeholder="请输入内容" />
  <p>输入的值: {{ inputValue }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>
```

:::

## 不同尺寸

:::demo 使用 `size` 属性来定义输入框尺寸，可选值为 `small`、`medium`、`large`。

```vue
<template>
  <BlinkInput v-model="small" size="small" placeholder="小尺寸" />
  <BlinkInput v-model="medium" size="medium" placeholder="默认尺寸" />
  <BlinkInput v-model="large" size="large" placeholder="大尺寸" />
</template>

<script setup>
import { ref } from 'vue'

const small = ref('')
const medium = ref('')
const large = ref('')
</script>
```

:::

## 不同类型

:::demo 使用 `type` 属性来定义输入框类型，可选值有 `text`、`password`、`email` 等。

```vue
<template>
  <BlinkInput v-model="text" type="text" placeholder="文本" />
  <BlinkInput v-model="password" type="password" placeholder="密码" />
  <BlinkInput v-model="email" type="email" placeholder="邮箱" />
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
const password = ref('')
const email = ref('')
</script>
```

:::

## 禁用状态

:::demo 使用 `disabled` 属性来定义输入框是否禁用。

```vue
<template>
  <BlinkInput v-model="disabledValue" disabled placeholder="禁用状态" />
</template>

<script setup>
import { ref } from 'vue'

const disabledValue = ref('')
</script>
```

:::

## 可清空输入框

:::demo 使用 `clearable` 属性来启用清空输入框功能。

```vue
<template>
  <BlinkInput v-model="clearableValue" clearable placeholder="可清空输入框" />
</template>

<script setup>
import { ref } from 'vue'

const clearableValue = ref('')
</script>
```

:::

## API 参考

### Props

| Prop | 描述 | 类型 | 默认值 |
|------|-------------|------|---------|
| modelValue | 输入框值 (v-model) | `string \| number` | `''` |
| type | 输入框类型 | `string` | `'text'` |
| placeholder | 占位符文本 | `string` | `undefined` |
| size | 输入框尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 输入框是否禁用 | `boolean` | `false` |
| readonly | 输入框是否只读 | `boolean` | `false` |
| rounded | 输入框是否有圆角 | `boolean` | `false` |
| clearable | 是否显示清除按钮 | `boolean` | `false` |

### Events

| 事件 | 描述 | 参数 |
|-------|-------------|------------|
| update:modelValue | 输入框值变化时触发 | `string \| number` |
| focus | 输入框获得焦点时触发 | `FocusEvent` |
| blur | 输入框失去焦点时触发 | `FocusEvent` |
| clear | 点击清除按钮时触发 | - |

### Slots

| 插槽 | 描述 |
|------|-------------|
| prefix | 显示在输入框前的内容 |
| suffix | 显示在输入框后的内容 |

## 最佳实践

1. **标签**：始终为表单输入框提供标签以提高无障碍性
2. **占位符**：使用占位符作为提示，而不是标签的替代品
3. **验证**：实现适当的验证并提供清晰的错误消息
4. **自动完成**：使用适当的自动完成属性以获得更好的用户体验
5. **响应式**：确保输入框在所有设备尺寸上都可用

## 无障碍性

- 使用 `for` 和 `id` 属性正确标记输入框
- 支持键盘导航
- 自动应用适当的 ARIA 属性
- 颜色对比度符合 WCAG 2.1 AA 标准
