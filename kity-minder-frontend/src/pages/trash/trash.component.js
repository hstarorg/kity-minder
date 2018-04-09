export class TrashComponent {
  static selector = 'trashComponent';
  static template = require('./trash.html');
  static $bindings = {};
  static $inject = ['$state'];
  constructor($state) {
    this.$state = $state;
  }
}
