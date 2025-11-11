<template>
  <div class="blink-upload-wrapper">
    <BlinkInput disabled :placeholder="t('components.upload.placeholder')">
      <template #append>
        <div class="blink-upload-buttons">
          <BlinkButton
            @click="() => uploadInputRef?.click()"
            type="button"
            visual="primary"
          >
            <input
              ref="uploadInputRef"
              class="blink-upload-input"
              type="file"
              @input="handleFileSelect"
              :multiple="multiple"
              :accept="mime.join(',')"
            />
          </BlinkButton>
          <BlinkButton type="button" visual="success"></BlinkButton>
        </div>
      </template>
    </BlinkInput>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BlinkInput from '../input';
import BlinkButton from '../button';
import { getI18n } from '@blink-the-ui/helper';

export default defineComponent({
  name: 'BlinkUpload',
  components: {
    BlinkInput,
    BlinkButton,
  },
  props: {
    trunk: {
      type: Boolean,
      default: false,
    },
    trunkSize: {
      type: Number,
      default: 1024 * 1024 * 5,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    mime: {
      type: Array,
      default: () => ['image/jpeg', 'image/png', 'image/gif'],
    },
  },
  emits: {
    change: (_file: FileList | null) => true,
    upload: (_file: File) => true,
    error: (_file: File) => true,
    progress: (_file: File) => true,
    complete: (_file: File) => true,
    abort: (_file: File) => true,
    remove: (_file: File) => true,
    clear: () => true,
  },
  setup(__props, { emit }) {
    const t = getI18n();
    const uploadInputRef = ref<HTMLElement | null>(null);
    const handleFileSelect = (e: InputEvent) => {
      emit('change', (e.target as HTMLInputElement).files);
    };

    return {
      t,
      uploadInputRef,
      handleFileSelect,
    };
  },
});
</script>
