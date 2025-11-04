import type { App } from 'vue';
import './index.less';
import BlinkButton from './button';
import BlinkSwitch from './switch';
import BlinkText from './text';
import BlinkLabel from './label';
import BlinkAlert from './alert';
import BlinkInput from './input';
import BlinkProgress from './progress';
import BlinkCheckbox from './checkbox';
import BlinkForm from './form';
import BlinkUpload from './upload';
import { i18n } from '@blink-the-ui/i18n';

export * from './types';
export {
  BlinkButton,
  BlinkSwitch,
  BlinkText,
  BlinkLabel,
  BlinkAlert,
  BlinkInput,
  BlinkProgress,
  BlinkCheckbox,
  BlinkForm,
  BlinkUpload,
};

export default {
  install: (app: App) => {
    import('./button').then(mod =>
      app.component(mod.default.name!, mod.default)
    );
    import('./switch').then(mod =>
      app.component(mod.default.name!, mod.default)
    );
    import('./text').then(mod => app.component(mod.default.name!, mod.default));
    import('./label').then(mod =>
      app.component(mod.default.name!, mod.default)
    );
    import('./alert').then(mod =>
      app.component(mod.default.name!, mod.default)
    );
    import('./input').then(mod =>
      app.component(mod.default.name!, mod.default)
    );
    import('./progress').then(mod =>
      app.component(mod.default.name!, mod.default)
    );
    import('./checkbox').then(mod =>
      app.component(mod.default.name!, mod.default)
    );
    import('./form').then(mod => app.component(mod.default.name!, mod.default));

    app.use(i18n);
  },
};
