import { Routes } from '@angular/router';

import { LayoutComponent } from '../shared/layout/layout.component';
import { LoginComponent } from '../login/login.component';
import { childRoutes } from './child.routes';

export const routes: Routes = [
 { path: '', component: LayoutComponent, children: childRoutes},
 { path: 'login', component: LoginComponent}
];
