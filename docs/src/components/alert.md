# Alert 警告框

Alert 组件用于向用户显示重要消息，如警告、错误或成功通知。

## 基本使用

```vue
<template>
  <BlinkAlert> 这是一条基本的警告消息。 </BlinkAlert>
</template>

<script setup lang="ts">
import { BlinkAlert } from '@blink-the-ui/components';
</script>
```

## 警告类型

不同类型的警告用于各种消息类别。

```vue
<template>
  <div>
    <BlinkAlert type="info"> 这是一条信息消息。 </BlinkAlert>
    <BlinkAlert type="success"> 这是一条成功消息。 </BlinkAlert>
    <BlinkAlert type="warning"> 这是一条警告消息。 </BlinkAlert>
    <BlinkAlert type="error"> 这是一条错误消息。 </BlinkAlert>
  </div>
</template>

<script setup lang="ts">
import { BlinkAlert } from '@blink-the-ui/components';
</script>
```

## 带标题

警告框可以有标题以更好地组织内容。

```vue
<template>
  <BlinkAlert type="warning">
    <template #title> 警告 </template>
    这是一条带标题的警告消息。
  </BlinkAlert>
</template>

<script setup lang="ts">
import { BlinkAlert } from '@blink-the-ui/components';
</script>
```

## 可关闭警告

允许用户使用关闭按钮关闭警告。

```vue
<template>
  <BlinkAlert v-if="showAlert" type="info" closable @close="showAlert = false">
    用户可以关闭此警告。
  </BlinkAlert>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkAlert } from '@blink-the-ui/components';

const showAlert = ref(true);
</script>
```

## 自定义图标

使用自定义图标更好地表示消息类型。

```vue
<template>
  <BlinkAlert type="success" icon="check-circle">
    此警告有自定义图标。
  </BlinkAlert>
</template>

<script setup lang="ts">
import { BlinkAlert } from '@blink-the-ui/components';
</script>
```

## API 参考

### Props

| Prop     | 描述             | 类型                                          | 默认值      |
| -------- | ---------------- | --------------------------------------------- | ----------- |
| type     | 警告类型         | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'`    |
| closable | 警告是否可关闭   | `boolean`                                     | `false`     |
| icon     | 自定义图标名称   | `string`                                      | `undefined` |
| showIcon | 是否显示默认图标 | `boolean`                                     | `true`      |

### Events

| 事件  | 描述           | 参数 |
| ----- | -------------- | ---- |
| close | 警告关闭时触发 | -    |

### Slots

| 插槽    | 描述           |
| ------- | -------------- |
| default | 警告的内容     |
| title   | 警告的标题     |
| icon    | 自定义图标内容 |

## 最佳实践

1. **适当类型**：使用正确的警告类型以匹配消息的严重性
2. **简洁消息**：保持警告消息清晰简洁
3. **可操作内容**：在可能的情况下提供可操作的信息
4. **非阻塞**：对非关键信息使用非阻塞警告
5. **自动关闭**：考虑在超时后自动关闭不太重要的警告

## 无障碍性

- 警告使用适当的 ARIA 角色（`alert`、`alertdialog`）供屏幕阅读器使用
- 正确的颜色对比度确保视觉受损用户的可读性
- 可关闭警告的焦点管理
- 语义化的 HTML 结构以获得更好的屏幕阅读器支持
