import BlinkButton from './index.vue';

type ButtonVisual = 'default' | 'primary' | 'danger' | 'warning' | 'success';
type ButtonOutline = 'solid' | 'ghost';

export {
  BlinkButton,
  type ButtonOutline as BlinkButtonOutline,
  type ButtonVisual as BlinkButtonType,
  type ButtonVisual as BlinkButtonVisual,
};
export default BlinkButton;
