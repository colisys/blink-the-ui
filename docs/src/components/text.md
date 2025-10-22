# Text 文本

Text 组件用于显示具有各种样式和格式选项的文本内容。

## 基本使用

```vue
<template>
  <BlinkText> 这是一个基本的文本元素。 </BlinkText>
</template>

<script setup lang="ts">
import { BlinkText } from '@blink-the-ui/components';
</script>
```

## 文本变体

不同文本变体用于各种内容类型。

```vue
<template>
  <div>
    <BlinkText variant="heading"> 标题文本 </BlinkText>
    <BlinkText variant="subtitle"> 副标题文本 </BlinkText>
    <BlinkText variant="body"> 正文文本 </BlinkText>
    <BlinkText variant="caption"> 标注文本 </BlinkText>
  </div>
</template>

<script setup lang="ts">
import { BlinkText } from '@blink-the-ui/components';
</script>
```

## 文本对齐

使用 align 属性控制文本对齐。

```vue
<template>
  <div>
    <BlinkText align="left"> 左对齐文本 </BlinkText>
    <BlinkText align="center"> 居中对齐文本 </BlinkText>
    <BlinkText align="right"> 右对齐文本 </BlinkText>
    <BlinkText align="justify"> 两端对齐文本 </BlinkText>
  </div>
</template>

<script setup lang="ts">
import { BlinkText } from '@blink-the-ui/components';
</script>
```

## 文本粗细

调整字体粗细以强调内容。

```vue
<template>
  <div>
    <BlinkText weight="light"> 细体文本 </BlinkText>
    <BlinkText weight="normal"> 正常粗细文本 </BlinkText>
    <BlinkText weight="medium"> 中等粗细文本 </BlinkText>
    <BlinkText weight="bold"> 粗体文本 </BlinkText>
  </div>
</template>

<script setup lang="ts">
import { BlinkText } from '@blink-the-ui/components';
</script>
```

## 文本颜色

为文本元素应用不同颜色。

```vue
<template>
  <div>
    <BlinkText color="primary"> 主要颜色文本 </BlinkText>
    <BlinkText color="secondary"> 次要颜色文本 </BlinkText>
    <BlinkText color="success"> 成功颜色文本 </BlinkText>
    <BlinkText color="warning"> 警告颜色文本 </BlinkText>
    <BlinkText color="error"> 错误颜色文本 </BlinkText>
  </div>
</template>

<script setup lang="ts">
import { BlinkText } from '@blink-the-ui/components';
</script>
```

## 截断文本

用省略号截断长文本。

```vue
<template>
  <BlinkText truncate style="max-width: 200px">
    这是一段很长的文本，将被截断并显示省略号。
  </BlinkText>
</template>

<script setup lang="ts">
import { BlinkText } from '@blink-the-ui/components';
</script>
```

## API 参考

### Props

| Prop     | 描述                 | 类型                                                            | 默认值      |
| -------- | -------------------- | --------------------------------------------------------------- | ----------- |
| variant  | 文本变体样式         | `'heading' \| 'subtitle' \| 'body' \| 'caption'`                | `'body'`    |
| align    | 文本对齐方式         | `'left' \| 'center' \| 'right' \| 'justify'`                    | `'left'`    |
| weight   | 字体粗细             | `'light' \| 'normal' \| 'medium' \| 'bold'`                     | `'normal'`  |
| color    | 文本颜色             | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error'` | `undefined` |
| truncate | 是否用省略号截断文本 | `boolean`                                                       | `false`     |

### Slots

| 插槽    | 描述           |
| ------- | -------------- |
| default | 文本元素的内容 |

## 最佳实践

1. **语义化变体**：使用适当的文本变体创建清晰的视觉层次结构
2. **一致样式**：在整个应用程序中保持一致的文本样式
3. **无障碍性**：确保文本颜色与背景有足够的对比度
4. **响应式文本**：考虑文本在不同屏幕尺寸上的显示效果
5. **行长度**：保持适当的行长度以提高可读性（通常为 50-75 个字符）

## 无障碍性

- 根据文本变体使用适当的语义化 HTML 元素
- 足够的颜色对比度比例以确保可读性
- 支持用户调整浏览器字体大小的文本缩放
- 支持屏幕阅读器的适当标题结构
