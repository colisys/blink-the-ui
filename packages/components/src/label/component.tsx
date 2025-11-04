import { defineComponent, h, type PropType, Fragment } from 'vue';
import type { TextTriggering, TextType } from '../text/index.vue';
import BlinkText from '../text';

const BlinkLabel = defineComponent({
  name: 'BlinkLabel',
  props: {
    type: {
      type: String as PropType<TextType>,
      default: 'default',
    },
    triggering: {
      type: String as PropType<TextTriggering>,
      default: 'click',
    },
  },
  render() {
    return h(
      <Fragment>
        <BlinkText
          type={this.type}
          allowSelect={false}
          triggering={this.triggering}
        >
          {() => this.$slots?.default?.()}
        </BlinkText>
      </Fragment>
    );
  },
});

export { BlinkLabel };
export default BlinkLabel;
