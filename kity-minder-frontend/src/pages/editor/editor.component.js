export class EditorComponent {
  static selector = 'editorComponent';
  static templateUrl = 'pages/editor/editor.html';
  constructor() {}

  initEditor(editor, minder) {
    window.editor = editor;
    window.minder = minder;
  }
}
