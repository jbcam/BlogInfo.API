import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogPostService } from './services/blogpost.service';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/authentication.service';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AuthComponent } from './auth/auth.component';
import { NewPostComponent } from './new-post/new-post.component';
import { AlertsModule } from 'angular-alert-module';
import { ErrorHandler } from './Helpers/ErrorHandler';

const appRoutes: Routes = [
  { path: 'blog', component: BlogViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: BlogViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    BlogViewComponent,
    NewPostComponent
  ],


  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AlertsModule.forRoot()
  ],

  providers: [BlogPostService, AuthService,ErrorHandler],
  bootstrap: [AppComponent]
})

export class AppModule { }
