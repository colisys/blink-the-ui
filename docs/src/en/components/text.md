# Text

The Text component is used to display text content with various styles and formatting options.

## Basic Usage

```vue
<template>
  <BlinkText> This is a basic text element. </BlinkText>
</template>

<script setup lang="ts">
import { BlinkText } from '@blink-the-ui/components';
</script>
```

## Text Variants

Different text variants for various content types.

```vue
<template>
  <div>
    <BlinkText variant="heading"> Heading Text </BlinkText>
    <BlinkText variant="subtitle"> Subtitle Text </BlinkText>
    <BlinkText variant="body"> Body Text </BlinkText>
    <BlinkText variant="caption"> Caption Text </BlinkText>
  </div>
</template>

<script setup lang="ts">
import { BlinkText } from '@blink-the-ui/components';
</script>
```

## Text Alignment

Control text alignment with the align property.

```vue
<template>
  <div>
    <BlinkText align="left"> Left aligned text </BlinkText>
    <BlinkText align="center"> Center aligned text </BlinkText>
    <BlinkText align="right"> Right aligned text </BlinkText>
    <BlinkText align="justify"> Justified text </BlinkText>
  </div>
</template>

<script setup lang="ts">
import { BlinkText } from '@blink-the-ui/components';
</script>
```

## Text Weight

Adjust font weight for emphasis.

```vue
<template>
  <div>
    <BlinkText weight="light"> Light weight text </BlinkText>
    <BlinkText weight="normal"> Normal weight text </BlinkText>
    <BlinkText weight="medium"> Medium weight text </BlinkText>
    <BlinkText weight="bold"> Bold text </BlinkText>
  </div>
</template>

<script setup lang="ts">
import { BlinkText } from '@blink-the-ui/components';
</script>
```

## Text Colors

Apply different colors to text elements.

```vue
<template>
  <div>
    <BlinkText color="primary"> Primary colored text </BlinkText>
    <BlinkText color="secondary"> Secondary colored text </BlinkText>
    <BlinkText color="success"> Success colored text </BlinkText>
    <BlinkText color="warning"> Warning colored text </BlinkText>
    <BlinkText color="error"> Error colored text </BlinkText>
  </div>
</template>

<script setup lang="ts">
import { BlinkText } from '@blink-the-ui/components';
</script>
```

## Truncated Text

Truncate long text with ellipsis.

```vue
<template>
  <BlinkText truncate style="max-width: 200px">
    This is a very long text that will be truncated with an ellipsis.
  </BlinkText>
</template>

<script setup lang="ts">
import { BlinkText } from '@blink-the-ui/components';
</script>
```

## API Reference

### Props

| Prop     | Description                            | Type                                                            | Default     |
| -------- | -------------------------------------- | --------------------------------------------------------------- | ----------- |
| variant  | Text variant style                     | `'heading' \| 'subtitle' \| 'body' \| 'caption'`                | `'body'`    |
| align    | Text alignment                         | `'left' \| 'center' \| 'right' \| 'justify'`                    | `'left'`    |
| weight   | Font weight                            | `'light' \| 'normal' \| 'medium' \| 'bold'`                     | `'normal'`  |
| color    | Text color                             | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error'` | `undefined` |
| truncate | Whether to truncate text with ellipsis | `boolean`                                                       | `false`     |

### Slots

| Slot    | Description                 |
| ------- | --------------------------- |
| default | Content of the text element |

## Best Practices

1. **Semantic Variants**: Use appropriate text variants to create a clear visual hierarchy
2. **Consistent Styling**: Maintain consistent text styling throughout your application
3. **Accessibility**: Ensure sufficient color contrast for readability
4. **Responsive Text**: Consider how text will appear on different screen sizes
5. **Line Length**: Keep line lengths appropriate for readability (typically 50-75 characters)

## Accessibility

- Proper semantic HTML elements are used based on text variant
- Sufficient color contrast ratios for readability
- Text scaling support for users who adjust browser font sizes
- Support for screen readers with proper heading structure
