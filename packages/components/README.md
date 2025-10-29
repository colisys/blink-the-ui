# @blink-the-ui/components

Blink UI 核心组件库，包含常用的 UI 组件。

## 安装

```bash
npm install @blink-the-ui/components
```

## 使用

```vue
<template>
  <Button @click="handleClick">点击我</Button>
  <Input v-model="inputValue" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue';
import { Button, Input } from '@blink-the-ui/components';

const inputValue = ref('');
const handleClick = () => {
  console.log('输入的值:', inputValue.value);
};
</script>
```

## 可用组件

- `Alert` - 警告提示
- `Avatar` - 头像组件
- `Button` - 按钮组件
- `Checkbox` - 复选框
- `Form` - 表单组件
- `Input` - 输入框
- `Label` - 标签组件
- `Progress` - 进度条
- `Switch` - 开关组件
- `Text` - 文本组件
- `Upload` - 上传组件

## 许可证

[MIT](../../../LICENSE)
