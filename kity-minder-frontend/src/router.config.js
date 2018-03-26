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
      if (comp.$bindings) {
        compConfig.bindings = comp.$bindings;
      }
      app.component(comp.selector, compConfig);
    });
  }
};
