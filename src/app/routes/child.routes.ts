import { Routes } from '@angular/router';

import { RedditComponent } from '../reddit/reddit.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

export const childRoutes: Routes = [
  { path: '', redirectTo: 'reddit' },
  { path: 'reddit', component: RedditComponent },
  { path: 'todo-list', component: TodoListComponent }
];