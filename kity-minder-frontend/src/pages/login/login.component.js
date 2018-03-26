export class LoginComponent {
  static selector = 'loginComponent';
  static templateUrl = 'pages/login/login.html';
  static $bindings = {};
  static $inject = ['$state'];
  constructor($state) {
    this.$state = $state;
    localStorage.removeItem('login');
  }

  doLogin() {
    localStorage.setItem('login', 'ok');
    this.$state.go('layout.home');
  }
}
