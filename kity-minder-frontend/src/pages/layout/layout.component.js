import './layout.less';

import { accountService } from '../../services';

export class LayoutComponent {
  static selector = 'layoutComponent';
  static template = require('./layout.html');
  static $bindings = {};
  static $inject = ['$state'];
  constructor($state) {
    this.$state = $state;
  }

  userAvatarUrl = 'https://www.gravatar.com/avatar/';

  $onInit() {
    const user = accountService.getUser();
    if (user && user.avatarUrl) {
      this.userAvatarUrl = user.avatarUrl;
    }
  }

  doLogout() {
    accountService.doLogout();
    this.$state.go('login');
  }
}
