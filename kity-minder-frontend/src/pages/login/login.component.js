import './login.css';

import { accountService } from '../../services';

export class LoginComponent {
  static selector = 'loginComponent';
  static template = require('./login.html');
  static $bindings = {};
  static $inject = ['$state'];
  constructor($state) {
    this.$state = $state;
    localStorage.removeItem('login');
  }
  user = {
    // 用户对象，用户名、密码
    username: '',
    password: ''
  };

  async doLogin() {
    await accountService.doLogin(this.user.username, this.user.password);
    this.$state.go('layout.home');
  }
}
