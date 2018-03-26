export class LayoutComponent {
  static selector = 'layoutComponent';
  static templateUrl = 'pages/layout/layout.html';
  static $routeConfig = [
    { path: '/', name: 'Editor', component: 'editorComponent' },
    { path: '**', name: 'NotFound', component: 'notfoundComponent' }
  ];
  static $bindings = {
    $router: '<'
  };
  constructor() {}
  $routerOnActivate(next, previous) {
    if (localStorage.getItem('login') !== 'ok') {
      this.$router.navigate(['Login']);
    }
  }
}
