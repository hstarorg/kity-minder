export class TrashListComponent {
  static selector = 'trashListComponent';
  static template = require('./trash-list.html');
  static $bindings = {};
  static $inject = ['$state'];
  constructor($state) {
    this.$state = $state;
  }
}
