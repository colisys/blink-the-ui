# Label

The Label component is used to associate text with form elements, improving accessibility and usability.

## Basic Usage

```vue
<template>
  <div>
    <BlinkLabel for="username">Username</BlinkLabel>
    <BlinkInput id="username" v-model="username" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkLabel, BlinkInput } from '@blink-the-ui/components';

const username = ref('');
</script>
```

## Required Indicator

Show a visual indicator for required fields.

```vue
<template>
  <div>
    <BlinkLabel for="email" required>Email</BlinkLabel>
    <BlinkInput id="email" v-model="email" type="email" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkLabel, BlinkInput } from '@blink-the-ui/components';

const email = ref('');
</script>
```

## Label Variants

Different label styles for various contexts.

```vue
<template>
  <div>
    <BlinkLabel variant="default" for="input1">Default Label</BlinkLabel>
    <BlinkInput id="input1" v-model="input1" />

    <BlinkLabel variant="secondary" for="input2">Secondary Label</BlinkLabel>
    <BlinkInput id="input2" v-model="input2" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkLabel, BlinkInput } from '@blink-the-ui/components';

const input1 = ref('');
const input2 = ref('');
</script>
```

## Inline Labels

Display labels inline with form elements.

```vue
<template>
  <div style="display: flex; align-items: center; gap: 8px;">
    <BlinkLabel inline for="toggle">Enable feature</BlinkLabel>
    <BlinkSwitch id="toggle" v-model="enabled" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkLabel, BlinkSwitch } from '@blink-the-ui/components';

const enabled = ref(false);
</script>
```

## API Reference

### Props

| Prop     | Description                        | Type                       | Default     |
| -------- | ---------------------------------- | -------------------------- | ----------- |
| for      | ID of the associated form element  | `string`                   | `undefined` |
| required | Whether to show required indicator | `boolean`                  | `false`     |
| variant  | Label style variant                | `'default' \| 'secondary'` | `'default'` |
| inline   | Whether to display label inline    | `boolean`                  | `false`     |

### Slots

| Slot    | Description          |
| ------- | -------------------- |
| default | Content of the label |

## Best Practices

1. **Always Associate**: Always associate labels with form elements using the `for` attribute
2. **Clear Text**: Use clear, descriptive text that indicates the purpose of the form element
3. **Required Fields**: Clearly indicate required fields with visual indicators
4. **Placement**: Place labels above or to the left of form elements for better usability
5. **Contrast**: Ensure sufficient contrast between label text and background

## Accessibility

- Proper `for` and `id` association ensures clicking the label focuses the form element
- Screen readers properly announce the label when the associated form element is focused
- Required indicators are announced by screen readers
- Sufficient color contrast for readability
- Proper semantic HTML structure
