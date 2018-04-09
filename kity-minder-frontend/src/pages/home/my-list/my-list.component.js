export class MyListComponent {
  static selector = 'myListComponent';
  static template = require('./my-list.html');
  static $bindings = {};
  static $inject = ['$state'];
  constructor($state) {
    this.$state = $state;
  }
}
