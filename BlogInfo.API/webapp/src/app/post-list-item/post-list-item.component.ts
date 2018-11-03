import { Component, Input, OnInit} from '@angular/core';
import { Post, PostDto } from '../models/blog.model';
import { BlogPostService } from '../services/blogpost.service';
import { AuthComponent } from '../auth/auth.component';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit  {

  @Input() post: Post;
  @Input() authStatus: AuthComponent;
  updateMode: boolean = false;
  updateForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.initForm();
  }

  //init update form
  initForm() {
    this.updateForm = this.formBuilder.group({
      title: [this.post.title, Validators.required],
      contents: [this.post.contents, Validators.required]
    })

  }

  //Like Button - API call Like
  onLike() {
    this.blogPostService.like(this.post.id);   
  }

    //DisLike Button - API call Like
  onDislike() {
    this.blogPostService.disLike(this.post.id);
  }


    //Update Post Button - to enable update Form view
  onUpdate() {
    this.updateMode = true;
    console.log('Update mode is On')
  }
   
   //Form's update post save button - API call Update Post
  onSaveUpdate() {
    const formValue = this.updateForm.value;
    const updatedPostDto = new PostDto(
      formValue['title'],
      formValue['contents']
    );
    console.log('form content value ' + formValue['contents']);

    this.blogPostService.updatePostOnServer(this.post.id, updatedPostDto).then(() => {

      this.updateMode = false;
      console.log('Post id ' + this.post.id + ' was updated succesfully')

    });

    

  }

  //Delete post Button - API call to delete Post
  onDelete() {
    this.blogPostService.deletePostFromServer(this.post.id);
  }
}
