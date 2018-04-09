export class FavListComponent {
  static selector = 'favListComponent';
  static template = require('./fav-list.html');
  static $bindings = {};
  static $inject = ['$state'];
  constructor($state) {
    this.$state = $state;
  }
}
