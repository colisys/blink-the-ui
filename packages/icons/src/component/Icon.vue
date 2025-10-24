<template>
  <slot>
    <i :class="iconClass"></i>
  </slot>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'BlinkIcon',
  props: {
    iconClass: {
      type: String,
      default: '',
    },
    iconGroup: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const iconClass = computed(() => `${props.iconGroup} ${props.iconClass}`);
    return {
      iconClass,
    };
  },
});
</script>
