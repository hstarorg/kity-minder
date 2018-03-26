export class AppComponent {
  static selector = 'kityminderApp';
  static templateUrl = 'pages/app/app.html';
  static $routeConfig = [
    { path: '/...', name: 'Layout', component: 'layoutComponent', useAsDefault: true },
    { path: '/login', name: 'Login', component: 'loginComponent' }
  ];
}
