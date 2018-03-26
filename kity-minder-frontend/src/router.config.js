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
      '$transitionsProvider',
      ($stateProvider, $transitionsProvider) => {
        states.forEach(state => $stateProvider.state(state));
        // 校验登录状态
        $transitionsProvider.onStart({ to: 'layout.**' }, function(trans) {
          var $state = trans.router.stateService;
          if (localStorage.getItem('login') !== 'ok') {
            return $state.target('login');
          }
        });
      }
    ]);
  }
};
