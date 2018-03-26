import { PAGES } from './pages';

export const router = {
  init(app) {
    PAGES.forEach(comp => {
      app.component(comp.selector, {
        templateUrl: comp.templateUrl,
        controller: comp
      });
    });

    // app.config([
    //   '$routeProvider',
    //   $routeProvider => {
    //     routes.forEach(route => {
    //       app.controller(route.name, route.controller);
    //       $routeProvider.when(route.path, {
    //         controller: `${route.name} as vm`,
    //         templateUrl: route.templateUrl
    //       });
    //     });
    //     $routeProvider.otherwise('/404');
    //   }
    // ]);
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
