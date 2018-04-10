import { messageBox, storage } from '../../common';
import { minderService } from '../../services';

export class EditorComponent {
  static selector = 'editorComponent';
  static template = require('./editor.html');
  static $inject = ['$location', '$state'];
  constructor($location, $state) {
    this.$location = $location;
    this.$state = $state;
    this.minderId = this.$state.params.id || 0;
    this.cacheDataIntervalId = null;
  }

  editor = null;
  minder = null;

  initEditor(editor, minder) {
    this.editor = editor;
    this.minder = minder;
  }

  saveMinderData = e => {
    e.preventDefault();
    const path = this.$location.path();
    if (path.startsWith('/minder/')) {
      const data = JSON.stringify(this.minder.exportJson());
      minderService.saveMinderData(this.minderId, data).then(() => {
        messageBox.msg('保存成功');
      });
    }
  };

  async _initMinderData() {
    const cacheKey = `minder_${this.minderId}`;
    minderService.getMinderInfoById(this.minderId).then(minder => {
      try {
        const mindData = JSON.parse(minder.mindData);
        this.minder.importJson(mindData);
      } catch (e) {}
    });
    // const data = await storage.get(cacheKey);
    // if (data) {
    //   this.minder.importJson(data);
    // }
    // this.cacheDataIntervalId = setInterval(() => {
    //   storage.set(cacheKey, this.minder.exportJson());
    // }, 5000);
  }

  $onInit() {
    Mousetrap.bindGlobal('ctrl+s', this.saveMinderData);
    this._initMinderData();
  }

  $onDestroy() {
    clearInterval(this.cacheDataIntervalId);
  }
}
