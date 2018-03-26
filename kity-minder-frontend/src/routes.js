export const routes = [
  { name: 'login', url: '/login', component: 'loginComponent' },
  { name: 'layout', url: '', component: 'layoutComponent' },
  { name: 'layout.home', url: '/', component: 'homeComponent' },
  { name: 'layout.editor', url: '/minder/{id}', component: 'editorComponent' }
];
