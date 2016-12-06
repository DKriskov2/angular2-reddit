import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RedditComponent } from './reddit/reddit.component';
import { ArticleComponent } from './reddit/article/article.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { routes } from './routes/app.routes';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    TodoListComponent,
    RedditComponent,
    LayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
