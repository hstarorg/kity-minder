import { PAGES } from './pages';

export const router = {
  init(app) {
    PAGES.forEach(comp => {
      const compConfig = {
        templateUrl: comp.templateUrl,
        controller: comp
      };
      if (comp.$bindings) {
        compConfig.bindings = comp.$bindings;
      }
      if (comp.$canActivate) {
        compConfig.$canActivate = comp.$canActivate;
      }
      app.component(comp.selector, compConfig);
    });
    const states = [
      { name: 'login', url: '/login', component: 'loginComponent' },
      { name: 'layout', url: '', component: 'layoutComponent' },
      { name: 'layout.home', url: '/', component: 'homeComponent' },
      { name: 'layout.editor', url: '/minder/{id}', component: 'editorComponent' }
    ];
    app.config([
      '$stateProvider',
      $stateProvider => {
        states.forEach(state => $stateProvider.state(state));
      }
    ]);
  }
};
