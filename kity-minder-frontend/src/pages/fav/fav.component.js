export class FavComponent {
  static selector = 'favComponent';
  static template = require('./fav.html');
  static $bindings = {};
  static $inject = ['$state'];
  constructor($state) {
    this.$state = $state;
  }
}
