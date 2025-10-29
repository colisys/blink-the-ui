# @blink-the-ui/overlays

Blink UI 浮层组件库，提供弹窗、提示等浮层相关组件。

## 安装

```bash
npm install @blink-the-ui/overlays
```

## 使用

```vue
<template>
  <Button @click="showDialog = true">打开对话框</Button>
  <Dialog v-model:visible="showDialog">
    <p>这是一个对话框</p>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import { Dialog } from '@blink-the-ui/overlays';
import { Button } from '@blink-the-ui/components';

const showDialog = ref(false);
</script>
```

## 可用组件

- `Dialog` - 对话框
- `Dock` - 停靠面板
- `Dropdown` - 下拉菜单
- `Overlay` - 浮层容器
- `Popup` - 弹出层
- `Toast` - 轻提示
- `Tooltip` - 工具提示

## 许可证

[MIT](../../../LICENSE)
