# @blink-the-ui/i18n

Internationalization support for blink-the-ui components.

## Installation

```bash
npm install @blink-the-ui/i18n
```

## Usage

```typescript
import { createApp } from 'vue';
import { i18n } from '@blink-the-ui/i18n';

const app = createApp(App);
app.use(i18n);
app.mount('#app');
```

## Adding New Languages

1. Create a new folder under `src/locales` with the language code (e.g. `fr` for French)
2. Create a JSON file with the translation keys
3. Import and register the new language in `src/index.ts`

## Switching Languages

```typescript
import { i18n } from '@blink-the-ui/i18n';

// Switch to Chinese
i18n.global.locale.value = 'zh';

// Switch to English
i18n.global.locale.value = 'en';
```
