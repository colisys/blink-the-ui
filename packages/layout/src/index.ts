import { type App } from 'vue';

import BlinkLayoutCol from './col';
import BlinkLayoutRow from './row';
import BlinkLayoutGroup from './group';
import BlinkLayoutGrid from './grid';
import BlinkLayoutStacked from './stacked';
import BlinkLayoutList from './list';

export {
  BlinkLayoutCol,
  BlinkLayoutRow,
  BlinkLayoutGroup,
  BlinkLayoutGrid,
  BlinkLayoutStacked,
  BlinkLayoutList,
};

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
    import('./list').then(mod => app.component(mod.default.name!, mod.default));
  },
};
