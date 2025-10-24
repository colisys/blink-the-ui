import { type App } from 'vue';

export * from './col';
export * from './row';
export * from './group';
export * from './grid';
export * from './stacked';
export * from './types';

export default {
  install: (app: App) => {
    import('./group').then(mod =>
      app.component(mod.default.name!, mod.default)
    );
    import('./row').then(mod => app.component(mod.default.name!, mod.default));
    import('./col').then(mod => app.component(mod.default.name!, mod.default));
    import('./grid').then(mod => app.component(mod.default.name!, mod.default));
    import('./stacked').then(mod =>
      app.component(mod.default.name!, mod.default)
    );
  },
};
