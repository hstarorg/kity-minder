export const util = {
  loadComponents(app, components) {
    components.forEach(comp => {
      const compConfig = {
        controller: comp
      };
      if (comp.templateUrl) {
        compConfig.templateUrl = comp.templateUrl;
      }
      if (comp.template) {
        compConfig.template = comp.template;
      }
      if (comp.$bindings) {
        compConfig.bindings = comp.$bindings;
      }
      app.component(comp.selector, compConfig);
    });
  }
};
