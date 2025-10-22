# Group

The Group component is used to group related elements together, providing consistent spacing and layout.

## Basic Usage

```vue
<template>
  <BlinkGroup>
    <BlinkButton>Button 1</BlinkButton>
    <BlinkButton>Button 2</BlinkButton>
    <BlinkButton>Button 3</BlinkButton>
  </BlinkGroup>
</template>

<script setup lang="ts">
import { BlinkGroup, BlinkButton } from '@blink-the-ui/components';
</script>
```

## Vertical Group

Arrange elements vertically with consistent spacing.

```vue
<template>
  <BlinkGroup direction="vertical">
    <BlinkButton>Button 1</BlinkButton>
    <BlinkButton>Button 2</BlinkButton>
    <BlinkButton>Button 3</BlinkButton>
  </BlinkGroup>
</template>

<script setup lang="ts">
import { BlinkGroup, BlinkButton } from '@blink-the-ui/components';
</script>
```

## Form Group

Group form elements with proper spacing.

```vue
<template>
  <BlinkGroup direction="vertical">
    <div>
      <BlinkLabel for="name">Name</BlinkLabel>
      <BlinkInput id="name" v-model="name" placeholder="Enter your name" />
    </div>

    <div>
      <BlinkLabel for="email">Email</BlinkLabel>
      <BlinkInput
        id="email"
        v-model="email"
        type="email"
        placeholder="Enter your email"
      />
    </div>

    <div>
      <BlinkButton type="submit">Submit</BlinkButton>
    </div>
  </BlinkGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  BlinkGroup,
  BlinkLabel,
  BlinkInput,
  BlinkButton,
} from '@blink-the-ui/components';

const name = ref('');
const email = ref('');
</script>
```

## Custom Spacing

Adjust spacing between elements.

```vue
<template>
  <BlinkGroup :spacing="20">
    <BlinkButton>Button 1</BlinkButton>
    <BlinkButton>Button 2</BlinkButton>
    <BlinkButton>Button 3</BlinkButton>
  </BlinkGroup>
</template>

<script setup lang="ts">
import { BlinkGroup, BlinkButton } from '@blink-the-ui/components';
</script>
```

## API Reference

### Props

| Prop      | Description                                    | Type                                         | Default        |
| --------- | ---------------------------------------------- | -------------------------------------------- | -------------- |
| direction | Layout direction                               | `'horizontal' \| 'vertical'`                 | `'horizontal'` |
| spacing   | Spacing between elements (in pixels)           | `number`                                     | `10`           |
| align     | Alignment of elements (horizontal direction)   | `'left' \| 'center' \| 'right' \| 'stretch'` | `'left'`       |
| justify   | Justification of elements (vertical direction) | `'top' \| 'center' \| 'bottom' \| 'stretch'` | `'top'`        |

### Slots

| Slot    | Description            |
| ------- | ---------------------- |
| default | Elements to be grouped |

## Best Practices

1. **Consistent Spacing**: Use Group to maintain consistent spacing between related elements
2. **Logical Grouping**: Group elements that logically belong together
3. **Direction Choice**: Choose the appropriate direction based on the layout needs
4. **Responsive Design**: Consider how groups will appear on different screen sizes
5. **Nested Groups**: Use nested groups for complex layouts with multiple alignment requirements

## Accessibility

- No specific accessibility concerns for the Group component
- Properly groups related elements which can help with screen reader navigation
- Maintains consistent spacing which improves readability
