# Directives

A collection of Vue directives for enhancing UI components.

## Available Directives

### Blink Ripple

Adds a ripple effect to elements when clicked or touched.

Usage:

```vue
<template>
  <button v-blink-ripple>Click me</button>
</template>

<script setup>
import { BlinkRippleDirective } from '@blink-directives';

// Register locally
const vBlinkRipple = BlinkRippleDirective;

// Or register globally in main.js:
// app.directive('blink-ripple', BlinkRippleDirective);
</script>
```

### Prettier Datetime

Formats datetime strings into human-readable relative time expressions like "just now", "5 minutes ago", or "3 days later".

This directive uses `@blink-the-ui/i18n` for internationalization. It supports both Chinese and English locales out of the box.

Usage:

```vue
<template>
  <!-- Parse content of element as datetime -->
  <span v-prettier-datetime>2023-05-20T10:30:00</span>

  <!-- Or provide datetime as argument -->
  <span v-prettier-datetime="{ time: '2023-05-20T10:30:00' }"></span>

  <!-- Customized locale -->
  <span v-prettier-datetime="{ locale: 'en' }">2023-05-20T10:30:00</span>
</template>

<script setup>
import { PrettierDatetimeDirective } from '@blink-directives';

// Register locally
const vPrettierDatetime = PrettierDatetimeDirective;

// Or register globally in main.js:
// app.directive('prettier-datetime', PrettierDatetimeDirective);
</script>
```

Configuration options:

- `time`: Explicitly provide datetime string (when used with `textContent` argument)
- `locale`: Locale setting, defaults to `'zh'` (supported: `'zh'`, `'en'`)

Supported time units:

- Year
- Month
- Day
- Hour
- Minute
- Second

The directive automatically parses various datetime formats:

- ISO format: `2023-05-20T10:30:00`
- Date with time: `2023-05-20 10:30:00`
- Date only: `2023-05-20`
- And other commonly used formats

Examples of displayed text:

- Times within 1 second: "刚刚" (zh) / "Just now" (en)
- 1 second in the past: "1秒前" (zh) / "1 second ago" (en)
- 5 minutes in the past: "5分钟前" (zh) / "5 minutes ago" (en)
- 3 days in the future: "3天后" (zh) / "3 days later" (en)
