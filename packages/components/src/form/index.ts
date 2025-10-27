import type { RuleItem } from 'async-validator';
import BlinkForm from './index.vue';

const BlinkFormContainerSymbol = Symbol.for('BlinkFormContainer');
type BlinkFormItems = Array<BlinkFormItemInterface>;
interface BlinkFormItemInterface {
  name: string;
  value: () => any;
  validate?: RuleItem;
}
export {
  BlinkForm,
  BlinkFormContainerSymbol,
  type BlinkFormItemInterface,
  type BlinkFormItems,
};

export default BlinkForm;
