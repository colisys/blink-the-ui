# Switch

The Switch component is used for toggling between two states, typically on and off.

## Basic Usage

```vue
<template>
  <BlinkSwitch v-model="switchValue" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkSwitch } from '@blink-the-ui/components';

const switchValue = ref(false);
</script>
```

## With Label

Using the Switch with a label for better context.

```vue
<template>
  <div>
    <BlinkSwitch v-model="notifications" />
    <BlinkLabel for="notifications">Enable notifications</BlinkLabel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkSwitch, BlinkLabel } from '@blink-the-ui/components';

const notifications = ref(true);
</script>
```

## Disabled State

Disable the switch to prevent user interaction.

```vue
<template>
  <BlinkSwitch v-model="value" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkSwitch } from '@blink-the-ui/components';

const value = ref(false);
</script>
```

## Sizes

Switches come in different sizes to match other form elements.

```vue
<template>
  <div>
    <BlinkSwitch v-model="small" size="small" />
    <BlinkSwitch v-model="medium" size="medium" />
    <BlinkSwitch v-model="large" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkSwitch } from '@blink-the-ui/components';

const small = ref(false);
const medium = ref(false);
const large = ref(false);
</script>
```

## Custom Colors

Customize the switch colors to match your design.

```vue
<template>
  <BlinkSwitch v-model="value" active-color="#42b883" inactive-color="#ccc" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlinkSwitch } from '@blink-the-ui/components';

const value = ref(true);
</script>
```

## API Reference

### Props

| Prop          | Description                    | Type                             | Default     |
| ------------- | ------------------------------ | -------------------------------- | ----------- |
| modelValue    | Switch value (v-model)         | `boolean`                        | `false`     |
| disabled      | Whether the switch is disabled | `boolean`                        | `false`     |
| size          | Switch size                    | `'small' \| 'medium' \| 'large'` | `'medium'`  |
| activeColor   | Background color when active   | `string`                         | `undefined` |
| inactiveColor | Background color when inactive | `string`                         | `undefined` |

### Events

| Event             | Description                       | Parameters |
| ----------------- | --------------------------------- | ---------- |
| update:modelValue | Emitted when switch value changes | `boolean`  |
| change            | Emitted when switch value changes | `boolean`  |

### Slots

| Slot         | Description                          |
| ------------ | ------------------------------------ |
| activeIcon   | Icon to show when switch is active   |
| inactiveIcon | Icon to show when switch is inactive |

## Best Practices

1. **Clear Labeling**: Always provide clear labels that indicate what the switch controls
2. **Immediate Effect**: Switches should generally have immediate effects rather than requiring form submission
3. **Consistent Positioning**: Place switches consistently throughout your application
4. **Accessibility**: Ensure switches are keyboard accessible and properly labeled
5. **Confirmation**: For destructive actions, consider using a checkbox with confirmation instead

## Accessibility

- Switches are keyboard focusable and can be toggled using the Space or Enter keys
- Proper ARIA attributes (`role="switch"`, `aria-checked`) are applied automatically
- Color contrast meets WCAG 2.1 AA standards
- Works with screen readers to announce state changes
