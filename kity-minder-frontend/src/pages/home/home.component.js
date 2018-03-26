export class HomeComponent {
  static selector = 'homeComponent';
  static templateUrl = 'pages/home/home.html';
  static $bindings = {};
  static $inject = ['$state'];
  constructor($state) {
    this.$state = $state;
  }
}
