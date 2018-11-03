import { Component, OnInit, Input } from '@angular/core';
import { BlogPostService,  } from '../services/blogpost.service';
import {  Post } from '../models/blog.model';
import { AppComponent } from '../app.component';
import { Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})

export class BlogViewComponent implements OnInit {

  private posts: Post[];
  postsSubsription: Subscription;
  isLoading: boolean = true;

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.postsSubsription = this.blogPostService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );

    this.blogPostService.getBlogPostFromServer().then(() => {
      console.log('isloading = false');
      this.isLoading = false
    }
    );
   
   
  }

  ngOnDestroy() {
    this.postsSubsription.unsubscribe();
  }


 
  
  
}
