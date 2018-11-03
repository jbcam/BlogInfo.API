import { Subject } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { UserDto } from "../models/user.model";
import { ErrorHandler } from "../Helpers/ErrorHandler";


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class AuthService {

  private authStatus = false;
  authStatusSubject = new Subject<boolean>();
  private url = 'http://localhost:55607/api/users/';

  emitAuthStatusSubject() {
    this.authStatusSubject.next(this.authStatus);
  }

  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandler) { }


  signIn(userDto: UserDto): Promise<any> {

    return new Promise((resolve, reject) => {

      this.httpClient.post<any>(this.url + 'authenticate', userDto, httpOptions)
        .pipe(catchError(this.errorHandler.handleError<any>('login')))
        .subscribe((response) => {
          // login successful if there's a jwt token in the response
          if (response && response.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(response));
            this.authStatus = true;
            console.log('login sucessful')
            this.emitAuthStatusSubject();
            resolve();
          }
          else {
            reject();
            console.log('login failed')
          }
        },
          (error) => {
            console.log('An error occurred while login: ' + error);
            reject();
          }
        );
    }
    );
  }

  signOut() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.authStatus = false;
    this.emitAuthStatusSubject();
  }
}
