import { createApp } from 'vue';
import App from './App.vue';

import BlinkUI from '@blink-the-ui/components';
import {
  BlinkPrettierDatetimeDirective,
  BlinkRippleDirective,
} from '@blink-the-ui/directives';

createApp(App)
  .use(BlinkUI)
  .directive('blink-ripple', BlinkRippleDirective)
  .directive('blink-datetime', BlinkPrettierDatetimeDirective)
  .mount('#app');
