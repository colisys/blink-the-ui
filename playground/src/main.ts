import { createApp } from 'vue';
import App from './App.vue';

import BlinkUI from '@blink-the-ui/components';
import {
  BlinkPrettierDatetimeDirective,
  BlinkRippleDirective,
} from '@blink-the-ui/directives';
import BlinkIcons from '@blink-the-ui/icons';

createApp(App)
  .use(BlinkUI)
  .use(BlinkIcons)
  .directive('blink-ripple', BlinkRippleDirective)
  .directive('blink-datetime', BlinkPrettierDatetimeDirective)
  .mount('#app');
