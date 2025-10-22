# Alert

The Alert component is used to display important messages to users, such as warnings, errors, or success notifications.

## Basic Usage

```vue
<template>
  <BlinkAlert> This is a basic alert message. </BlinkAlert>
</template>

<script setup lang="ts">
import { BlinkAlert } from '@blink-the-ui/components';
</script>
```

## Alert Types

Different alert types for various message categories.

```vue
<template>
  <div>
    <BlinkAlert type="info"> This is an informational message. </BlinkAlert>
    <BlinkAlert type="success"> This is a success message. </BlinkAlert>
    <BlinkAlert type="warning"> This is a warning message. </BlinkAlert>
    <BlinkAlert type="error"> This is an error message. </BlinkAlert>
  </div>
</template>

<script setup lang="ts">
import { BlinkAlert } from '@blink-the-ui/components';
</script>
```

## With Title

Alerts can have titles for better organization.

```vue
<template>
  <BlinkAlert type="warning">
    <template #title> Warning </template>
    This is a warning message with a title.
  </BlinkAlert>
</template>

<script setup lang="ts">
import { BlinkAlert } from '@blink-the-ui/components';
</script>
```

## Closable Alerts

Allow users to dismiss alerts with a close button.

```vue
<template>
  <BlinkAlert v-if="showAlert" type="info" closable @close="showAlert = false">
    This alert can be closed by the user.
  </BlinkAlert>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkAlert } from '@blink-the-ui/components';

const showAlert = ref(true);
</script>
```

## Custom Icon

Use custom icons to better represent the message type.

```vue
<template>
  <BlinkAlert type="success" icon="check-circle">
    This alert has a custom icon.
  </BlinkAlert>
</template>

<script setup lang="ts">
import { BlinkAlert } from '@blink-the-ui/components';
</script>
```

## API Reference

### Props

| Prop     | Description                      | Type                                          | Default     |
| -------- | -------------------------------- | --------------------------------------------- | ----------- |
| type     | Alert type                       | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'`    |
| closable | Whether the alert can be closed  | `boolean`                                     | `false`     |
| icon     | Custom icon name                 | `string`                                      | `undefined` |
| showIcon | Whether to show the default icon | `boolean`                                     | `true`      |

### Events

| Event | Description                  | Parameters |
| ----- | ---------------------------- | ---------- |
| close | Emitted when alert is closed | -          |

### Slots

| Slot    | Description          |
| ------- | -------------------- |
| default | Content of the alert |
| title   | Title of the alert   |
| icon    | Custom icon content  |

## Best Practices

1. **Appropriate Types**: Use the correct alert type to match the message severity
2. **Concise Messages**: Keep alert messages clear and concise
3. **Actionable Content**: Provide actionable information when possible
4. **Non-Blocking**: Use non-blocking alerts for non-critical information
5. **Auto-dismissal**: Consider auto-dismissing less important alerts after a timeout

## Accessibility

- Alerts use appropriate ARIA roles (`alert`, `alertdialog`) for screen readers
- Proper color contrast ensures readability for users with visual impairments
- Focus management for closable alerts
- Semantic HTML structure for better screen reader support
