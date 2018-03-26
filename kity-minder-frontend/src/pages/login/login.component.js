export class LoginComponent {
  static selector = 'loginComponent';
  static templateUrl = 'pages/login/login.html';
  static $bindings = {
    $router: '<'
  };
  constructor() {
    localStorage.removeItem('login');
  }

  doLogin() {
    localStorage.setItem('login', 'ok');
    this.$router.navigate(['Layout', 'Editor']);
  }
}
