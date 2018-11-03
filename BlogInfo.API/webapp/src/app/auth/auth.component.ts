import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Post } from '../models/blog.model';
import { Subscription } from 'rxjs';
import { BlogPostService } from '../services/blogpost.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserDto } from '../models/user.model';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;
  authStatusSubsription: Subscription;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,  private alerts: AlertsService) { }

  ngOnInit() {
    this.authStatusSubsription = this.authService.authStatusSubject.subscribe(
      (authStatus: boolean) => {
        this.authStatus = authStatus;
        console.log("Receive auth subscription: " + this.authStatus)
      }
    );
    this.authService.emitAuthStatusSubject();
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }
 
   ngOnDestroy() {

    this.authStatusSubsription.unsubscribe();
  }

  onSignIn() {
    const formValue = this.loginForm.value;
    const userDto = new UserDto(
      formValue['email'],
      formValue['password'],
    );

    this.authService.signIn(userDto).then(() => {
      this.router.navigate(['blog']);
    },
      () => {
        this.alerts.setMessage('login failed','error');
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.authService.emitAuthStatusSubject();
  }

}
