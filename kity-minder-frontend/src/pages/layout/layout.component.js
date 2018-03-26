export class LayoutComponent {
  static selector = 'layoutComponent';
  static templateUrl = 'pages/layout/layout.html';
  static $routeConfig = [{ path: '/', name: 'Editor', component: 'editorComponent' }];
  constructor() {}
}
