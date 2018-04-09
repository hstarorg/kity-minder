import { messageBox } from '../../common';
export class EditorComponent {
  static selector = 'editorComponent';
  static template = require('./editor.html');
  static $inject = ['$location'];
  constructor($location) {
    this.$location = $location;
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
      messageBox.msg('保存成功');
    }
  };

  $onInit() {
    Mousetrap.bindGlobal('ctrl+s', this.saveMinderData);
  }

  $onDestroy() {}
}
