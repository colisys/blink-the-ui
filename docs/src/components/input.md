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
import { ref } from 'vue';
import { BlinkInput } from '@blink-the-ui/components';

const inputValue = ref('');
</script>
```

:::
