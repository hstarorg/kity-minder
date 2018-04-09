import './home.less';

export class HomeComponent {
  static selector = 'homeComponent';
  static template = require('./home.html');
  static $bindings = {};
  static $inject = ['$state'];
  constructor($state) {
    this.$state = $state;
  }

  createNewMinder() {
    this.$state.go('layout.editor', { id: 1 });
  }
}
