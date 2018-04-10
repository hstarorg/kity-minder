import './home.less';

export class HomeComponent {
  static selector = 'homeComponent';
  static template = require('./home.html');
  static $bindings = {};
  static $inject = ['$state'];
  constructor($state) {
    this.$state = $state;
  }

  minderModal = {
    shown: false,
    title: '新建思维导图'
  };

  createNewMinder() {
    this.minderModal.shown = true;
    // this.$state.go('layout.editor', { id: 1 });
  }
}
