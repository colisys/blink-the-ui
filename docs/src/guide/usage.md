# 使用

学习如何在您的 Vue 3 应用程序中有效使用 Blink UI 组件。

## 基本使用

安装 Blink UI 后，您就可以在模板中开始使用组件了。以下是一个基本示例：

```vue
<template>
  <div>
    <BlinkText variant="heading">欢迎使用 Blink UI</BlinkText>
    <BlinkButton @click="handleClick">点击我</BlinkButton>
  </div>
</template>

<script setup lang="ts">
import { BlinkText, BlinkButton } from '@blink-the-ui/components';

const handleClick = () => {
  alert('按钮被点击了!');
};
</script>
```

## 组件 API

Blink UI 中的每个组件都遵循一致的 API 设计原则：

### Props

Props 用于向组件传递数据：

```vue
<template>
  <BlinkButton variant="primary" size="large" :disabled="isDisabled">
    我的按钮
  </BlinkButton>
</template>

<script setup lang="ts">
import { BlinkButton } from '@blink-the-ui/components';
import { ref } from 'vue';

const isDisabled = ref(false);
</script>
```

### Events

组件会发出事件，您可以监听这些事件：

```vue
<template>
  <BlinkSwitch @update:modelValue="handleToggle" />
</template>

<script setup lang="ts">
import { BlinkSwitch } from '@blink-the-ui/components';

const handleToggle = (value: boolean) => {
  console.log('开关切换:', value);
};
</script>
```

### Slots

许多组件支持插槽以用于自定义内容：

```vue
<template>
  <BlinkAlert type="info">
    <template #title>
      <BlinkText variant="subtitle">信息</BlinkText>
    </template>
    这是一条带有自定义标题的信息消息。
  </BlinkAlert>
</template>

<script setup lang="ts">
import { BlinkAlert, BlinkText } from '@blink-the-ui/components';
</script>
```

## 样式定制

Blink UI 组件可以通过多种方式自定义：

### 使用 CSS 变量

覆盖 CSS 变量以自定义主题：

```css
:root {
  --blink-primary-color: #42b883;
  --blink-secondary-color: #35495e;
}
```

### 使用类名

向组件添加自定义类：

```vue
<template>
  <BlinkButton class="my-custom-button">自定义按钮</BlinkButton>
</template>

<style scoped>
.my-custom-button {
  border-radius: 20px;
}
</style>
```

### 使用样式 Props

一些组件支持样式 props 以进行常见自定义：

```vue
<template>
  <BlinkText :style="{ color: 'blue', fontSize: '18px' }">
    自定义样式文本
  </BlinkText>
</template>
```

## 国际化

Blink UI 通过 `@blink-the-ui/i18n` 包支持国际化：

```ts
import { i18n } from '@blink-the-ui/i18n';

// 设置语言为英文
i18n.global.locale.value = 'en';

// 设置语言为中文
i18n.global.locale.value = 'zh';
```

## 无障碍性

Blink UI 组件在设计时考虑了无障碍性：

- 正确的 ARIA 属性
- 键盘导航支持
- 语义化的 HTML 结构
- 充足的颜色对比度

使用组件时，请确保：

- 提供有意义的标签
- 使用适当的标题层次结构
- 确保交互元素支持键盘访问

## 最佳实践

### 组件注册

为了更好的性能，推荐单独导入组件而不是全局注册：

```ts
// 推荐
import { BlinkButton } from '@blink-the-ui/components/button';

// 对于打包体积来说不太推荐
import { BlinkButton } from '@blink-the-ui/components';
```

### 事件处理

在可用时使用 Vue 的 `v-model` 指令进行双向数据绑定：

```vue
<template>
  <BlinkSwitch v-model="isEnabled" />
</template>

<script setup lang="ts">
import { BlinkSwitch } from '@blink-the-ui/components';
import { ref } from 'vue';

const isEnabled = ref(false);
</script>
```

### 条件渲染

适当地使用 Vue 的条件渲染指令：

```vue
<template>
  <BlinkAlert v-if="showError" type="error"> 出现了一些问题！ </BlinkAlert>
</template>

<script setup lang="ts">
import { BlinkAlert } from '@blink-the-ui/components';
import { ref } from 'vue';

const showError = ref(false);
</script>
```

通过这些使用模式，您可以有效地将 Blink UI 组件集成到您的 Vue 3 应用程序中。查看各个组件文档以获取详细的 API 信息和示例。
