import './home.less';

import { messageBox } from '../../common';
import { minderService } from '../../services';

export class HomeComponent {
  static selector = 'homeComponent';
  static template = require('./home.html');
  static $bindings = {};
  static $inject = ['$state', '$scope'];
  constructor($state, $scope) {
    this.$state = $state;
    this.$scope = $scope;
  }

  minderModal = {
    shown: false,
    title: '新建思维导图'
  };
  minderInfo = {
    name: '',
    description: ''
  };

  openMinderModal() {
    this.minderModal.shown = true;
    // this.$state.go('layout.editor', { id: 1 });
  }

  createNewMinder() {
    if (!this.minderInfo.name) {
      return messageBox.error('请输入思维导图名称');
    }
    minderService.createMinder(this.minderInfo).then(() => {
      this.$scope.$applyAsync(() => (this.minderModal.shown = false));
      messageBox.msg('创建成功');
      setTimeout(() => {
        this.$state.go('layout.editor', { id: 1 });
      }, 1000);
    });
  }
}
