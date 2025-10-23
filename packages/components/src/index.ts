import type { App } from 'vue';
import './index.less';
import BlinkButton from './button';
import BlinkSwitch from './switch';
import BlinkText from './text';
import BlinkLabel from './label';
import BlinkAlert from './alert';
import BlinkInput from './input';
import BlinkProgress from './progress';

export {
  BlinkButton,
  BlinkSwitch,
  BlinkText,
  BlinkLabel,
  BlinkAlert,
  BlinkInput,
  BlinkProgress,
};

export * from './types';
import { i18n } from '@blink-the-ui/i18n';
import Overlay from '@blink-the-ui/overlays';

export default {
  install: (app: App) => {
    import('./index.less');

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

    i18n.global.locale.value = 'zh';
    i18n.install(app);
    Overlay.install(app);
  },
};
