import { minderService } from '../../../services';

export class MyListComponent {
  static selector = 'myListComponent';
  static template = require('./my-list.html');
  static $bindings = {};
  static $inject = ['$state', '$scope'];
  constructor($state, $scope) {
    this.$state = $state;
    this.$scope = $scope;
  }

  minderList = [];

  $onInit() {
    minderService.getMyMinderList().then(data => {
      this.minderList = data;
      this.$scope.$digest();
    });
  }
}
