import { PAGES } from './pages';

export const router = {
  init(app) {
    PAGES.forEach(comp => {
      const compConfig = {
        templateUrl: comp.templateUrl,
        controller: comp
      };
      if (comp.$routeConfig) {
        compConfig.$routeConfig = comp.$routeConfig;
      }
      app.component(comp.selector, compConfig);
    });
  }
};

// .component('kity-minder-app', {
//   //     template:
//   //       '<nav>\n' +
//   //       '  <a ng-link="[\'CrisisCenter\']">Crisis Center</a>\n' +
//   //       '  <a ng-link="[\'Heroes\']">Heroes</a>\n' +
//   //       '</nav>\n' +
//   //       '<ng-outlet></ng-outlet>\n',
//   //     $routeConfig: [
//   //       { path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true },
//   //       { path: '/heroes/...', name: 'Heroes', component: 'heroes' }
//   //     ]
//   //   });
