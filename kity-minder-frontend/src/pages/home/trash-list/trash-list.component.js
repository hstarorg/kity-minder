import { messageBox } from '../../../common';
import { minderService } from '../../../services';

export class TrashListComponent {
  static selector = 'trashListComponent';
  static template = require('./trash-list.html');
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
    minderService.getTrashMinderList().then(data => {
      this.minderList = data;
      this.$scope.$digest();
    });
  }
  // 确认是否要撤销删除
  confirmUndoDeleteMinder(minder) {
    if (confirm(`确实要撤销删除 [${minder.name}]吗？`)) {
      minderService.undoDeleteMinderById(minder.id).then(() => {
        messageBox.msg('撤销删除成功！');
        this._loadMinderList();
      });
    }
  }
  // 确认是否要强制删除
  confirmForceDeleteMinder(minder) {
    if (confirm(`确实要彻底删除 [${minder.name}]吗？将不可恢复！`)) {
      minderService.forceDeleteMinderById(minder.id).then(() => {
        messageBox.msg('彻底删除成功！');
        this._loadMinderList();
      });
    }
  }
}
