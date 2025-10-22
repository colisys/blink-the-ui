# Input

The Input component allows users to enter and edit text or numeric values in a variety of formats.

## Basic Usage

```vue
<template>
  <BlinkInput v-model="inputValue" placeholder="Enter text..." />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkInput } from '@blink-the-ui/components';

const inputValue = ref('');
</script>
```

## Variants

Different input styles for various use cases.

```vue
<template>
  <div>
    <BlinkInput v-model="text" placeholder="Default input" />
    <BlinkInput v-model="text" placeholder="Rounded input" rounded />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkInput } from '@blink-the-ui/components';

const text = ref('');
</script>
```

## Sizes

Input fields come in different sizes.

```vue
<template>
  <div>
    <BlinkInput v-model="small" size="small" placeholder="Small" />
    <BlinkInput v-model="medium" size="medium" placeholder="Medium" />
    <BlinkInput v-model="large" size="large" placeholder="Large" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkInput } from '@blink-the-ui/components';

const small = ref('');
const medium = ref('');
const large = ref('');
</script>
```

## Disabled State

Make an input non-interactive with the `disabled` prop.

```vue
<template>
  <BlinkInput v-model="text" disabled placeholder="Disabled input" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkInput } from '@blink-the-ui/components';

const text = ref('');
</script>
```

## Input Types

Support for different input types like password, email, etc.

```vue
<template>
  <div>
    <BlinkInput v-model="email" type="email" placeholder="Email" />
    <BlinkInput v-model="password" type="password" placeholder="Password" />
    <BlinkInput v-model="number" type="number" placeholder="Number" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkInput } from '@blink-the-ui/components';

const email = ref('');
const password = ref('');
const number = ref('');
</script>
```

## Clearable Input

Add a clear button to easily reset the input value.

```vue
<template>
  <BlinkInput v-model="text" clearable placeholder="Clearable input" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkInput } from '@blink-the-ui/components';

const text = ref('');
</script>
```

## With Label

Use with the Label component for better accessibility.

```vue
<template>
  <div>
    <BlinkLabel for="username">Username</BlinkLabel>
    <BlinkInput id="username" v-model="username" placeholder="Enter username" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkInput, BlinkLabel } from '@blink-the-ui/components';

const username = ref('');
</script>
```

## API Reference

### Props

| Prop        | Description                           | Type                             | Default     |
| ----------- | ------------------------------------- | -------------------------------- | ----------- |
| modelValue  | Input value (v-model)                 | `string \| number`               | `''`        |
| type        | Input type                            | `string`                         | `'text'`    |
| placeholder | Placeholder text                      | `string`                         | `undefined` |
| size        | Input size                            | `'small' \| 'medium' \| 'large'` | `'medium'`  |
| disabled    | Whether the input is disabled         | `boolean`                        | `false`     |
| readonly    | Whether the input is readonly         | `boolean`                        | `false`     |
| rounded     | Whether the input has rounded corners | `boolean`                        | `false`     |
| clearable   | Whether to show clear button          | `boolean`                        | `false`     |

### Events

| Event             | Description                          | Parameters         |
| ----------------- | ------------------------------------ | ------------------ |
| update:modelValue | Emitted when input value changes     | `string \| number` |
| focus             | Emitted when input gains focus       | `FocusEvent`       |
| blur              | Emitted when input loses focus       | `FocusEvent`       |
| clear             | Emitted when clear button is clicked | -                  |

### Slots

| Slot   | Description                         |
| ------ | ----------------------------------- |
| prefix | Content to display before the input |
| suffix | Content to display after the input  |

## Best Practices

1. **Labels**: Always provide labels for form inputs for accessibility
2. **Placeholder**: Use placeholders as hints, not as replacements for labels
3. **Validation**: Implement proper validation with clear error messages
4. **Autocomplete**: Use appropriate autocomplete attributes for better user experience
5. **Responsive**: Ensure inputs are usable on all device sizes

## Accessibility

- Inputs are properly labeled using `for` and `id` attributes
- Keyboard navigation is supported
- Proper ARIA attributes are applied automatically
- Color contrast meets WCAG 2.1 AA standards
