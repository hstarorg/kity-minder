import { messageBox } from '../../../common';
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
    this._loadMinderList();
  }

  _loadMinderList() {
    minderService.getMyMinderList().then(data => {
      this.minderList = data;
      this.$scope.$digest();
    });
  }

  confirmDeleteMinder(minder) {
    if (confirm(`确实要删除 [${minder.name}]吗？`)) {
      minderService.deleteMinderById(minder.id).then(() => {
        messageBox.msg('删除成功！');
        this._loadMinderList();
      });
    }
  }
}
