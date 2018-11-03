import { Post, PostDto } from '../models/blog.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorHandler } from '../Helpers/ErrorHandler';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class BlogPostService {

  private url = 'http://localhost:55607/api/blogposts/';
  private posts: Post[];
  postsSubject = new Subject<Post[]>();

  //construction
  constructor(private httpClient: HttpClient, private router: Router, private errorHandler: ErrorHandler) { }

  //Post updates on new posts added
  emitPostsSubject(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.postsSubject.next(this.posts.slice());
      resolve();
    }
    );
  }

  getBlogPostFromServer(): Promise<any> {

    return new Promise((resolve, reject) => {

      this.httpClient
        .get<Array<Post>>(this.url)
        .subscribe((response) => {
          this.posts = response;
          console.log('Get Post Response: ' + response)
          this.emitPostsSubject().then(() => {
            //console.log('emitPostSubeject resolve');
            resolve();
          }
          )
        },
          (error) => {
            console.log('An error occurred in getPosts : ' + error);
          }
        );

    }
    );

  }

  //add post
  addPostToServer(newPostDto: PostDto) {
    this.httpClient
      .post<Post>(this.url, newPostDto, httpOptions)
      .pipe(catchError(this.errorHandler.handleError<Post>('addPost')))
      .subscribe((response) => {
        this.posts.push(response);
        console.log('Get Post Response: ' + response)
        this.emitPostsSubject()
        //this.router.navigate(['blog']);
      },
        (error) => {
          console.log('An error occurred while saving Post : ' + error);
        }
      );
  }

  //update post
  updatePostOnServer(id, updatedPostDto: PostDto) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .put<Post>(this.url + id, updatedPostDto, httpOptions)
        .pipe(catchError(this.errorHandler.handleError<Post>('addPost')))
        .subscribe((response) => {
          var index = this.posts.findIndex(x => x.id = id);
          if (index !== -1) {
            this.posts[index] = response;
          } else console.log("Can't find post in the list" + response);

          this.emitPostsSubject().then(() => {
            resolve();
          });

        },
          (error) => {
            console.log('An error occurred while updating Post : ' + error);
          }
        );
    });
  }

  //delete post
  deletePostFromServer(id: number) {
    this.httpClient
      .delete(this.url + id, httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError('deletePost'))
      )
      .subscribe(() => {
        this.posts = this.posts.filter(x => x.id != id);
        console.log(this.posts)
        console.log('Post id ' + id + ' was deleted')
        this.emitPostsSubject()
        //this.router.navigate(['blog']);
      },
        (error) => {
          console.log('An error occurred while deleting Post ' + id + ' : ' + error);
        }
      );
  }
  like(id) {

    this.httpClient
      .get(this.url + 'like/' + id)
      .subscribe(() => {
        this.posts.find(x => x.id == id).likes++
        console.log('Like incremented')
        this.emitPostsSubject()
      },
        (error) => {
          console.log('Like failed : ' + error);
        }
      )

  }

  disLike(id) {

    this.httpClient
      .get(this.url + 'dislike/' + id)
      .subscribe(() => {
        this.posts.find(x => x.id == id).likes--
        console.log('Like decremented')
        this.emitPostsSubject()
      },
        (error) => {
          console.log('DisLike failed : ' + error);
        }
      )

  }


}






