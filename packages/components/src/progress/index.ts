import BlinkProgress from './index.vue';

type BlinkProgressController = {
  suspend: () => void;
  resume: () => void;
  update: (_value: number) => void;
  clear: () => void;
  finish: () => void;
};

export { BlinkProgress, type BlinkProgressController };
export default BlinkProgress;
