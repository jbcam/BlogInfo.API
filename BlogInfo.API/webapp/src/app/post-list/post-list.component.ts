import { Component, OnInit, Input } from '@angular/core';
import { Post, PostDto } from '../models/blog.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/authentication.service';
import { FormGroup, Validators } from '@angular/forms';
import { BlogPostService } from '../services/blogpost.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    
  @Input() posts: Array<Post>;
  authStatus: boolean;
  authStatusSubsription: Subscription;

  constructor(private authService: AuthService, private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.authStatusSubsription = this.authService.authStatusSubject.subscribe(
      (authStatus: boolean) => {
        this.authStatus = authStatus;
      }
    );
    this.authService.emitAuthStatusSubject();
    //console.log(this.authStatus);
  }

  ngOnDestroy() {
    this.authStatusSubsription.unsubscribe();
  }
}
