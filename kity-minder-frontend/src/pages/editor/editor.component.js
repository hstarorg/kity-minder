export class EditorComponent {
  static selector = 'editorComponent';
  static template = require('./editor.html');
  constructor() {}

  initEditor(editor, minder) {
    window.editor = editor;
    window.minder = minder;
  }
}
