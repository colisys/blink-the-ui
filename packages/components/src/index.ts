import type { App } from 'vue';
import './index.less';
export * from './button';
export * from './switch';
export * from './text';
export * from './label';
export * from './alert';
export * from './input';
export * from './progress';
export * from './checkbox';
export * from './form';

export * from './types';
import { i18n } from '@blink-the-ui/i18n';
import { setApplicationContext } from '@blink-the-ui/helper';

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
    setApplicationContext(app._context);
  },
};
