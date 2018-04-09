export const routes = [
  { name: 'login', url: '/login', component: 'loginComponent' },
  { name: 'layout', url: '', component: 'layoutComponent' },
  { name: 'layout.home', url: '/', component: 'homeComponent' },
  { name: 'layout.fav', url: '/fav', component: 'favComponent' },
  { name: 'layout.trash', url: '/trash', component: 'trashComponent' },
  { name: 'layout.editor', url: '/minder/{id}', component: 'editorComponent' }
];
