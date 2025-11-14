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
import { computed, defineComponent, ref } from 'vue';
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
      default: () => ['*/*'],
    },
    emitContent: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    change: (_file: FileList | null) => true,
    upload: (_file: File) => true,
    error: (_file: File, __progress: number) => true,
    progress: (_file: File, __progress: number) => true,
    complete: (_file: File) => true,
    abort: (_file: File, __progress: number) => true,
    remove: (_file: File) => true,
    uploadContent: (_reader: ReadableStreamDefaultReader) => true,
    clear: () => true,
  },
  setup(__props, { emit, expose }) {
    const t = getI18n();
    const trunkSize = computed(() =>
      __props.trunkSize > 0 ? __props.trunkSize : 1024 * 1024 * 5
    );
    const uploadInputRef = ref<HTMLElement | null>(null);
    const fileList = ref<File[]>([]);
    const handleFileSelect = (e: InputEvent) => {
      const target = e.target as HTMLInputElement;
      fileList.value = Array.from(target.files || []);
      emit('change', target.files);
    };

    expose({
      doUpload: () => {
        fileList.value.forEach(file => {
          emit('upload', file);
          // 上传单个文件
          if (!__props.trunk) {
            if (__props.emitContent)
              emit('uploadContent', file.stream().getReader());

            file
              .stream()
              .getReader()
              .read()
              .then(result => {
                if (!result.done) {
                  // 继续读取
                  file.stream().getReader().read();
                }
              });
            return;
          }

          // 上传分片文件
          const chunkCount = Math.ceil(file.size / trunkSize.value);
          for (let i = 0; i < chunkCount; i++) {
            const start = i * trunkSize.value;
            const end = Math.min(start + trunkSize.value, file.size);
            const chunk = file.slice(start, end);
            if (__props.emitContent)
              emit('uploadContent', chunk.stream().getReader());
          }
        });
      },
    });

    return {
      t,
      uploadInputRef,
      handleFileSelect,
    };
  },
});
</script>
