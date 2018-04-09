import { NotfoundComponent } from './404/notfound.component';
import { AppComponent } from './app/app.component';
import { EditorComponent } from './editor/editor.component';
import { FavListComponent } from './home/fav-list/fav-list.component';
import { HomeComponent } from './home/home.component';
import { MyListComponent } from './home/my-list/my-list.component';
import { TrashListComponent } from './home/trash-list/trash-list.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

export const PAGES = [
  AppComponent,
  EditorComponent,
  LayoutComponent,
  LoginComponent,
  NotfoundComponent,
  HomeComponent,
  FavListComponent,
  TrashListComponent,
  MyListComponent
];
