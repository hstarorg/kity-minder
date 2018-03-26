export class EditorController {
  static selector = 'kityminder-editor';
  static templateUrl = 'pages/editor/editor.html';
  constructor($scope) {
    this.$scope = $scope;
  }

  initEditor(editor, minder) {
    window.editor = editor;
    window.minder = minder;
  }
}
EditorController.$inject = ['$scope'];
