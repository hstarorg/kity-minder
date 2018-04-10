import { util } from '../../common';
function noop() {}
export class ModalComponent {
  static selector = 'bsModal';
  static template = require('./modal.component.html');
  static transclude = true;
  static $bindings = {
    shown: '=',
    title: '<',
    size: '<',
    okText: '<',
    cancelText: '<',
    onCancel: '&',
    onOk: '&'
  };
  static $inject = ['$element', '$scope'];

  constructor($element, $scope) {
    this.$element = $element;
    this.$scope = $scope;
    // this.$scope.$watch('$ctrl.shown', this.handleShownChange);
    util.watch(this, 'shown', this.handleShownChange);
  }

  handleShownChange = (newVal, oldVal) => {
    newVal ? this._showModal() : this._hideModal();
  };

  _showModal() {
    this.modalInstance && this.modalInstance.modal('show');
  }

  _hideModal() {
    this.modalInstance && this.modalInstance.modal('hide');
  }

  _updateShown(shown) {
    this.$scope.$applyAsync(() => (this.shown = shown));
  }

  modalClass = '';
  modalInstance = null;

  handleCancelClick() {
    this.onCancel();
    this._updateShown(false);
  }

  handleOkClick() {
    this.onOk();
  }

  $onInit() {
    // 设置参数默认值
    this.okText = this.okText || 'OK';
    this.cancelText = this.cancelText || 'Cancel';
    // 初始化Modal
    this.modalInstance = this.$element.find('>div').modal({
      backdrop: 'static',
      show: false
    });
    // 处理Modal Hidden
    this.modalInstance.on('hidden.bs.modal', e => {
      this._updateShown(false);
    });
    // 设置初始状态
    if (this.shown) {
      this._showModal();
    }
  }

  //{ currentValue, previousValue, isFirstChange() }
  $onChanges(changesObj) {}
}
