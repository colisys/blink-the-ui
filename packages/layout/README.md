# @blink-the-ui/layout

Blink UI 布局组件库，提供灵活的页面布局解决方案。

## 安装

```bash
npm install @blink-the-ui/layout
```

## 使用

```vue
<template>
  <Container>
    <Row>
      <Col :span="12">
        <div>左侧内容</div>
      </Col>
      <Col :span="12">
        <div>右侧内容</div>
      </Col>
    </Row>
  </Container>
</template>

<script setup>
import { Container, Row, Col } from '@blink-the-ui/layout';
</script>
```

## 可用组件

- `Container` - 容器组件
- `Grid` - 网格布局
- `Row` - 行组件
- `Col` - 列组件
- `List` - 列表布局
- `Group` - 分组容器
- `Stacked` - 堆叠布局

## 响应式断点

布局组件支持以下响应式断点：

- `xs` - 超小屏幕 (<576px)
- `sm` - 小屏幕 (≥576px)
- `md` - 中等屏幕 (≥768px)
- `lg` - 大屏幕 (≥992px)

## 许可证

[MIT](../../../LICENSE)
