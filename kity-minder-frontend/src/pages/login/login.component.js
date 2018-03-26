export class LoginComponent {
  static selector = 'loginComponent';
  static template = require('./login.html');
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
