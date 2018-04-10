export const routes = [
  { name: 'login', url: '/login', component: 'loginComponent' },
  { name: 'layout', url: '', component: 'layoutComponent' },
  { name: 'layout.home', url: '', component: 'homeComponent', redirectTo: 'layout.home.my' },
  { name: 'layout.home.my', url: '/', component: 'myListComponent' },
  { name: 'layout.home.fav', url: '/fav', component: 'favListComponent' },
  { name: 'layout.home.trash', url: '/trash', component: 'trashListComponent' },
  { name: 'layout.editor', url: '/minder/{id}', component: 'editorComponent' }
];
