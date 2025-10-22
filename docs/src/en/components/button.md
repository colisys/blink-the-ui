# Button

The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, or canceling an action.

## Basic Usage

```vue
<template>
  <BlinkButton>Default Button</BlinkButton>
</template>

<script setup lang="ts">
import { BlinkButton } from '@blink-the-ui/components';
</script>
```

## Variants

Different button variants can be used to convey different meanings.

```vue
<template>
  <div>
    <BlinkButton>Default</BlinkButton>
    <BlinkButton variant="primary">Primary</BlinkButton>
    <BlinkButton variant="secondary">Secondary</BlinkButton>
    <BlinkButton variant="danger">Danger</BlinkButton>
  </div>
</template>
```

## Sizes

Buttons come in different sizes to fit various contexts.

```vue
<template>
  <div>
    <BlinkButton size="small">Small</BlinkButton>
    <BlinkButton size="medium">Medium</BlinkButton>
    <BlinkButton size="large">Large</BlinkButton>
  </div>
</template>
```

## Disabled State

Use the `disabled` prop to make a button non-interactive.

```vue
<template>
  <BlinkButton disabled>Disabled Button</BlinkButton>
</template>
```

## Loading State

Display a loading indicator to show that an operation is in progress.

```vue
<template>
  <BlinkButton :loading="isLoading" @click="handleClick">
    Click me
  </BlinkButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkButton } from '@blink-the-ui/components';

const isLoading = ref(false);

const handleClick = () => {
  isLoading.value = true;
  // Simulate API call
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>
```

## Icon Buttons

Buttons can contain icons for better visual representation.

```vue
<template>
  <div>
    <BlinkButton icon="search">Search</BlinkButton>
    <BlinkButton icon="heart" variant="danger" />
  </div>
</template>
```

## API Reference

### Props

| Prop     | Description                    | Type                                                | Default     |
| -------- | ------------------------------ | --------------------------------------------------- | ----------- |
| variant  | Button style variant           | `'default' \| 'primary' \| 'secondary' \| 'danger'` | `'default'` |
| size     | Button size                    | `'small' \| 'medium' \| 'large'`                    | `'medium'`  |
| disabled | Whether the button is disabled | `boolean`                                           | `false`     |
| loading  | Whether to show loading state  | `boolean`                                           | `false`     |
| icon     | Icon name to display           | `string`                                            | `undefined` |

### Events

| Event | Description                      | Parameters   |
| ----- | -------------------------------- | ------------ |
| click | Triggered when button is clicked | `MouseEvent` |

### Slots

| Slot    | Description           |
| ------- | --------------------- |
| default | Content of the button |
| icon    | Custom icon content   |

## Best Practices

1. **Consistent Usage**: Use the same variant for similar actions throughout your application
2. **Clear Labels**: Use descriptive text that clearly indicates the action
3. **Appropriate Sizing**: Choose button sizes that fit the context and surrounding elements
4. **Accessibility**: Ensure buttons have proper contrast and are keyboard navigable
5. **Loading States**: Always show loading indicators for actions that take time

## Accessibility

- Buttons are keyboard focusable and can be activated using the Enter or Space keys
- Proper ARIA attributes are applied automatically
- Color contrast meets WCAG 2.1 AA standards
