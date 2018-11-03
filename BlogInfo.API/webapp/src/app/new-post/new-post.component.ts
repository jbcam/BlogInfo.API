import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { BlogPostService } from '../services/blogpost.service';
import { PostDto } from '../models/blog.model';
import { Router } from '@angular/router';

@Component({
selector: 'app-new-post',
templateUrl: './new-post.component.html',
styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {


addForm: FormGroup;
testPost = [];

constructor(private formBuilder: FormBuilder, private blogPostService: BlogPostService, private router: Router) { }

ngOnInit() {
  this.initForm()
}

initForm() {
  this.addForm = this.formBuilder.group({
    title: ['', Validators.required],
    contents: ['', Validators.required],
     
  });
}

onSubmitForm() {
    const formValue = this.addForm.value;
    const newPostDto = new PostDto(
      formValue['title'],
      formValue['contents'],
    );
  this.blogPostService.addPostToServer(newPostDto);
  this.addForm.reset();
    //this.router.navigate(['blog']);
  }
  
}
