import BlinkButton from './index.vue';

import { type GlobalVisual } from '@blink-the-ui/theme';
type ButtonOutline = 'solid' | 'ghost';

export {
  BlinkButton,
  type ButtonOutline as BlinkButtonOutline,
  type GlobalVisual as BlinkButtonVisual,
};
export default BlinkButton;
