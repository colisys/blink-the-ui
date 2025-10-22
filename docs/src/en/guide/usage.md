# Usage

Learn how to effectively use Blink UI components in your Vue 3 applications.

## Basic Usage

After installing Blink UI, you can start using components in your templates. Here's a basic example:

```vue
<template>
  <div>
    <BlinkText variant="heading">Welcome to Blink UI</BlinkText>
    <BlinkButton @click="handleClick">Click Me</BlinkButton>
  </div>
</template>

<script setup lang="ts">
import { BlinkText, BlinkButton } from '@blink-the-ui/components';

const handleClick = () => {
  alert('Button clicked!');
};
</script>
```

## Component API

Each component in Blink UI follows consistent API design principles:

### Props

Props are used to pass data to components:

```vue
<template>
  <BlinkButton variant="primary" size="large" :disabled="isDisabled">
    My Button
  </BlinkButton>
</template>

<script setup lang="ts">
import { BlinkButton } from '@blink-the-ui/components';
import { ref } from 'vue';

const isDisabled = ref(false);
</script>
```

### Events

Components emit events that you can listen to:

```vue
<template>
  <BlinkSwitch @update:modelValue="handleToggle" />
</template>

<script setup lang="ts">
import { BlinkSwitch } from '@blink-the-ui/components';

const handleToggle = (value: boolean) => {
  console.log('Switch toggled:', value);
};
</script>
```

### Slots

Many components support slots for custom content:

```vue
<template>
  <BlinkAlert type="info">
    <template #title>
      <BlinkText variant="subtitle">Information</BlinkText>
    </template>
    This is an informational message with custom title.
  </BlinkAlert>
</template>

<script setup lang="ts">
import { BlinkAlert, BlinkText } from '@blink-the-ui/components';
</script>
```

## Styling

Blink UI components can be customized in several ways:

### Using CSS Variables

Override CSS variables to customize the theme:

```css
:root {
  --blink-primary-color: #42b883;
  --blink-secondary-color: #35495e;
}
```

### Using Class Names

Add custom classes to components:

```vue
<template>
  <BlinkButton class="my-custom-button">Custom Button</BlinkButton>
</template>

<style scoped>
.my-custom-button {
  border-radius: 20px;
}
</style>
```

### Using Style Props

Some components support style props for common customizations:

```vue
<template>
  <BlinkText :style="{ color: 'blue', fontSize: '18px' }">
    Custom Styled Text
  </BlinkText>
</template>
```

## Internationalization

Blink UI supports internationalization through the `@blink-the-ui/i18n` package:

```ts
import { i18n } from '@blink-the-ui/i18n';

// Set locale to English
i18n.global.locale.value = 'en';

// Set locale to Chinese
i18n.global.locale.value = 'zh';
```

## Accessibility

Blink UI components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Semantic HTML structure
- Sufficient color contrast

When using components, make sure to:

- Provide meaningful labels
- Use appropriate heading hierarchy
- Ensure interactive elements are keyboard accessible

## Best Practices

### Component Registration

For better performance, prefer individual component imports over global registration:

```ts
// Preferred
import { BlinkButton } from '@blink-the-ui/components/button';

// Less preferred for bundle size
import { BlinkButton } from '@blink-the-ui/components';
```

### Event Handling

Use Vue's `v-model` directive for two-way data binding when available:

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

### Conditional Rendering

Use Vue's conditional rendering directives appropriately:

```vue
<template>
  <BlinkAlert v-if="showError" type="error"> Something went wrong! </BlinkAlert>
</template>

<script setup lang="ts">
import { BlinkAlert } from '@blink-the-ui/components';
import { ref } from 'vue';

const showError = ref(false);
</script>
```

With these usage patterns, you can effectively integrate Blink UI components into your Vue 3 applications. Check out the individual component documentation for detailed API information and examples.
