(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Helpers/ErrorHandler.ts":
/*!*****************************************!*\
  !*** ./src/app/Helpers/ErrorHandler.ts ***!
  \*****************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    ErrorHandler.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    ErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorHandler);
    return ErrorHandler;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"blog\">My Blog</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li routerLinkActive=\"nav-item active\"><a class=\"nav-link\" routerLink=\"blog\">Post</a></li>\n      <li routerLinkActive=\"nav-item active\"><a class=\"nav-link\" routerLink=\"auth\">Login</a></li>\n    </ul>\n  </div>\n</nav>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_blogpost_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/blogpost.service */ "./src/app/services/blogpost.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post-list/post-list.component */ "./src/app/post-list/post-list.component.ts");
/* harmony import */ var _post_list_item_post_list_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post-list-item/post-list-item.component */ "./src/app/post-list-item/post-list-item.component.ts");
/* harmony import */ var _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog-view/blog-view.component */ "./src/app/blog-view/blog-view.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./new-post/new-post.component */ "./src/app/new-post/new-post.component.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _Helpers_ErrorHandler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Helpers/ErrorHandler */ "./src/app/Helpers/ErrorHandler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'blog', component: _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_10__["BlogViewComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"] },
    { path: '', component: _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_10__["BlogViewComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_8__["PostListComponent"],
                _post_list_item_post_list_item_component__WEBPACK_IMPORTED_MODULE_9__["PostListItemComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
                _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_10__["BlogViewComponent"],
                _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_12__["NewPostComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                angular_alert_module__WEBPACK_IMPORTED_MODULE_13__["AlertsModule"].forRoot()
            ],
            providers: [_services_blogpost_service__WEBPACK_IMPORTED_MODULE_4__["BlogPostService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _Helpers_ErrorHandler__WEBPACK_IMPORTED_MODULE_14__["ErrorHandler"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <h2>Log In</h2>\r\n              <form [formGroup]=\"loginForm\" *ngIf=\"!authStatus\" (ngSubmit)=\"onSignIn()\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" formControlName=\"email\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n              </form>\r\n              <button class=\"btn btn-danger\" *ngIf=\"authStatus\" (click)=\"onSignOut()\">Sign Out</button>\r\n              <app-alerts></app-alerts>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding-top: 70px;\n  width: 50vw; }\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthComponent = /** @class */ (function () {
    function AuthComponent(formBuilder, authService, router, alerts) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.alerts = alerts;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSubsription = this.authService.authStatusSubject.subscribe(function (authStatus) {
            _this.authStatus = authStatus;
            console.log("Receive auth subscription: " + _this.authStatus);
        });
        this.authService.emitAuthStatusSubject();
        this.initForm();
    };
    AuthComponent.prototype.initForm = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    AuthComponent.prototype.ngOnDestroy = function () {
        this.authStatusSubsription.unsubscribe();
    };
    AuthComponent.prototype.onSignIn = function () {
        var _this = this;
        var formValue = this.loginForm.value;
        var userDto = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["UserDto"](formValue['email'], formValue['password']);
        this.authService.signIn(userDto).then(function () {
            _this.router.navigate(['blog']);
        }, function () {
            _this.alerts.setMessage('login failed', 'error');
        });
    };
    AuthComponent.prototype.onSignOut = function () {
        this.authService.signOut();
        this.authService.emitAuthStatusSubject();
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular_alert_module__WEBPACK_IMPORTED_MODULE_5__["AlertsService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/blog-view/blog-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-post-list [posts]=\"posts\" *ngIf=\"!isLoading\">\r\n</app-post-list>\r\n"

/***/ }),

/***/ "./src/app/blog-view/blog-view.component.scss":
/*!****************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-view/blog-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.ts ***!
  \**************************************************/
/*! exports provided: BlogViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogViewComponent", function() { return BlogViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blogpost_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/blogpost.service */ "./src/app/services/blogpost.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogViewComponent = /** @class */ (function () {
    function BlogViewComponent(blogPostService) {
        this.blogPostService = blogPostService;
        this.isLoading = true;
    }
    BlogViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsSubsription = this.blogPostService.postsSubject.subscribe(function (posts) {
            _this.posts = posts;
        });
        this.blogPostService.getBlogPostFromServer().then(function () {
            console.log('isloading = false');
            _this.isLoading = false;
        });
    };
    BlogViewComponent.prototype.ngOnDestroy = function () {
        this.postsSubsription.unsubscribe();
    };
    BlogViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-view',
            template: __webpack_require__(/*! ./blog-view.component.html */ "./src/app/blog-view/blog-view.component.html"),
            styles: [__webpack_require__(/*! ./blog-view.component.scss */ "./src/app/blog-view/blog-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_blogpost_service__WEBPACK_IMPORTED_MODULE_1__["BlogPostService"]])
    ], BlogViewComponent);
    return BlogViewComponent;
}());



/***/ }),

/***/ "./src/app/models/blog.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/blog.model.ts ***!
  \**************************************/
/*! exports provided: Post, PostDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDto", function() { return PostDto; });
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());

var PostDto = /** @class */ (function () {
    function PostDto(title, contents) {
        this.title = title;
        this.contents = contents;
    }
    return PostDto;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User, UserDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDto", function() { return UserDto; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var UserDto = /** @class */ (function () {
    function UserDto(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    return UserDto;
}());



/***/ }),

/***/ "./src/app/new-post/new-post.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-post/new-post.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"list-group-item\">\r\n  <h2>Add a New Post:</h2>\r\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmitForm()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Title</label>\r\n      <input type=\"text\" id=\"title\" class=\"form-control\" formControlName=\"title\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"contents\">Contents</label>\r\n      <textarea class=\"form-control\" id=\"contents\" rows=\"3\" formControlName=\"contents\"></textarea>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n  </form>\r\n</li>\r\n"

/***/ }),

/***/ "./src/app/new-post/new-post.component.scss":
/*!**************************************************!*\
  !*** ./src/app/new-post/new-post.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-post/new-post.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-post/new-post.component.ts ***!
  \************************************************/
/*! exports provided: NewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostComponent", function() { return NewPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/blogpost.service */ "./src/app/services/blogpost.service.ts");
/* harmony import */ var _models_blog_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/blog.model */ "./src/app/models/blog.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewPostComponent = /** @class */ (function () {
    function NewPostComponent(formBuilder, blogPostService, router) {
        this.formBuilder = formBuilder;
        this.blogPostService = blogPostService;
        this.router = router;
        this.testPost = [];
    }
    NewPostComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    NewPostComponent.prototype.initForm = function () {
        this.addForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contents: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    NewPostComponent.prototype.onSubmitForm = function () {
        var formValue = this.addForm.value;
        var newPostDto = new _models_blog_model__WEBPACK_IMPORTED_MODULE_3__["PostDto"](formValue['title'], formValue['contents']);
        this.blogPostService.addPostToServer(newPostDto);
        this.addForm.reset();
        //this.router.navigate(['blog']);
    };
    NewPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-post',
            template: __webpack_require__(/*! ./new-post.component.html */ "./src/app/new-post/new-post.component.html"),
            styles: [__webpack_require__(/*! ./new-post.component.scss */ "./src/app/new-post/new-post.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__["BlogPostService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NewPostComponent);
    return NewPostComponent;
}());



/***/ }),

/***/ "./src/app/post-list-item/post-list-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/post-list-item/post-list-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li [ngClass]=\"{'list-group-item': true, 'list-group-item-success' : post.likes> 0,'list-group-item-danger': post.likes < 0}\" *ngIf=\"!updateMode\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h2>{{ post.title }}</h2>\r\n      <p>{{ post.contents }}</p>\r\n      <span class=\"timestamp\"> {{ post.createdAt | date: 'short' }}</span>\r\n      <button class=\"btn btn-success\" (click)=\"onLike()\">Love it!</button>\r\n      <button class=\"btn btn-danger\" (click)=\"onDislike()\">Don't love it!</button>\r\n      <span class=\"badge badge-light\">{{ post.likes }}</span>\r\n      <button class=\"btn btn-secondary\" (click)=\"onDelete()\" *ngIf=\"authStatus\">Delete</button>\r\n      <button class=\"btn btn-secondary\" (click)=\"onUpdate()\" *ngIf=\"authStatus\">Update</button>\r\n    </div>\r\n  </div>\r\n</li>\r\n<li class=\"list-group-item\"*ngIf=\"updateMode\">\r\n  <form [formGroup]=\"updateForm\" (ngSubmit)=\"onSaveUpdate()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Title:</label>\r\n      <input type=\"text\" id=\"title\" class=\"form-control\" formControlName=\"title\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"contents\">Contents:</label>\r\n      <textarea class=\"form-control\" id=\"contents\" rows=\"5\" formControlName=\"contents\"></textarea>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n  </form>\r\n</li>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/post-list-item/post-list-item.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/post-list-item/post-list-item.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timestamp {\n  color: grey;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-style: italic; }\n\n.btn {\n  margin-right: 5px; }\n\n.btn-secondary {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/post-list-item/post-list-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/post-list-item/post-list-item.component.ts ***!
  \************************************************************/
/*! exports provided: PostListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListItemComponent", function() { return PostListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_blog_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/blog.model */ "./src/app/models/blog.model.ts");
/* harmony import */ var _services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/blogpost.service */ "./src/app/services/blogpost.service.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostListItemComponent = /** @class */ (function () {
    function PostListItemComponent(formBuilder, blogPostService) {
        this.formBuilder = formBuilder;
        this.blogPostService = blogPostService;
        this.updateMode = false;
    }
    PostListItemComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    //init update form
    PostListItemComponent.prototype.initForm = function () {
        this.updateForm = this.formBuilder.group({
            title: [this.post.title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            contents: [this.post.contents, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    //Like Button - API call Like
    PostListItemComponent.prototype.onLike = function () {
        this.blogPostService.like(this.post.id);
    };
    //DisLike Button - API call Like
    PostListItemComponent.prototype.onDislike = function () {
        this.blogPostService.disLike(this.post.id);
    };
    //Update Post Button - to enable update Form view
    PostListItemComponent.prototype.onUpdate = function () {
        this.updateMode = true;
        console.log('Update mode is On');
    };
    //Form's update post save button - API call Update Post
    PostListItemComponent.prototype.onSaveUpdate = function () {
        var _this = this;
        var formValue = this.updateForm.value;
        var updatedPostDto = new _models_blog_model__WEBPACK_IMPORTED_MODULE_1__["PostDto"](formValue['title'], formValue['contents']);
        console.log('form content value ' + formValue['contents']);
        this.blogPostService.updatePostOnServer(this.post.id, updatedPostDto).then(function () {
            _this.updateMode = false;
            console.log('Post id ' + _this.post.id + ' was updated succesfully');
        });
    };
    //Delete post Button - API call to delete Post
    PostListItemComponent.prototype.onDelete = function () {
        this.blogPostService.deletePostFromServer(this.post.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_blog_model__WEBPACK_IMPORTED_MODULE_1__["Post"])
    ], PostListItemComponent.prototype, "post", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"])
    ], PostListItemComponent.prototype, "authStatus", void 0);
    PostListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-list-item',
            template: __webpack_require__(/*! ./post-list-item.component.html */ "./src/app/post-list-item/post-list-item.component.html"),
            styles: [__webpack_require__(/*! ./post-list-item.component.scss */ "./src/app/post-list-item/post-list-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__["BlogPostService"]])
    ], PostListItemComponent);
    return PostListItemComponent;
}());



/***/ }),

/***/ "./src/app/post-list/post-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/post-list/post-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <ul class=\"list-group\">\r\n        <app-post-list-item *ngFor=\"let post of posts\" [post]=\"post\" [authStatus]=\"authStatus\">\r\n        </app-post-list-item>\r\n        <app-new-post  *ngIf=\"authStatus\"></app-new-post>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/post-list/post-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/post-list/post-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 10%; }\n"

/***/ }),

/***/ "./src/app/post-list/post-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-list/post-list.component.ts ***!
  \**************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/blogpost.service */ "./src/app/services/blogpost.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostListComponent = /** @class */ (function () {
    function PostListComponent(authService, blogPostService) {
        this.authService = authService;
        this.blogPostService = blogPostService;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSubsription = this.authService.authStatusSubject.subscribe(function (authStatus) {
            _this.authStatus = authStatus;
        });
        this.authService.emitAuthStatusSubject();
        //console.log(this.authStatus);
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.authStatusSubsription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PostListComponent.prototype, "posts", void 0);
    PostListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.scss */ "./src/app/post-list/post-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_blogpost_service__WEBPACK_IMPORTED_MODULE_2__["BlogPostService"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Helpers_ErrorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Helpers/ErrorHandler */ "./src/app/Helpers/ErrorHandler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
var AuthService = /** @class */ (function () {
    function AuthService(httpClient, errorHandler) {
        this.httpClient = httpClient;
        this.errorHandler = errorHandler;
        this.authStatus = false;
        this.authStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.url = 'http://localhost:55607/api/users/';
    }
    AuthService.prototype.emitAuthStatusSubject = function () {
        this.authStatusSubject.next(this.authStatus);
    };
    AuthService.prototype.signIn = function (userDto) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.post(_this.url + 'authenticate', userDto, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(_this.errorHandler.handleError('login')))
                .subscribe(function (response) {
                // login successful if there's a jwt token in the response
                if (response && response.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(response));
                    _this.authStatus = true;
                    console.log('login sucessful');
                    _this.emitAuthStatusSubject();
                    resolve();
                }
                else {
                    reject();
                    console.log('login failed');
                }
            }, function (error) {
                console.log('An error occurred while login: ' + error);
                reject();
            });
        });
    };
    AuthService.prototype.signOut = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.authStatus = false;
        this.emitAuthStatusSubject();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _Helpers_ErrorHandler__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/blogpost.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/blogpost.service.ts ***!
  \**********************************************/
/*! exports provided: BlogPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostService", function() { return BlogPostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Helpers_ErrorHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Helpers/ErrorHandler */ "./src/app/Helpers/ErrorHandler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
var BlogPostService = /** @class */ (function () {
    //construction
    function BlogPostService(httpClient, router, errorHandler) {
        this.httpClient = httpClient;
        this.router = router;
        this.errorHandler = errorHandler;
        this.url = 'http://localhost:55607/api/blogposts/';
        this.postsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    //Post updates on new posts added
    BlogPostService.prototype.emitPostsSubject = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.postsSubject.next(_this.posts.slice());
            resolve();
        });
    };
    BlogPostService.prototype.getBlogPostFromServer = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .get(_this.url)
                .subscribe(function (response) {
                _this.posts = response;
                console.log('Get Post Response: ' + response);
                _this.emitPostsSubject().then(function () {
                    //console.log('emitPostSubeject resolve');
                    resolve();
                });
            }, function (error) {
                console.log('An error occurred in getPosts : ' + error);
            });
        });
    };
    //add post
    BlogPostService.prototype.addPostToServer = function (newPostDto) {
        var _this = this;
        this.httpClient
            .post(this.url, newPostDto, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler.handleError('addPost')))
            .subscribe(function (response) {
            _this.posts.push(response);
            console.log('Get Post Response: ' + response);
            _this.emitPostsSubject();
            //this.router.navigate(['blog']);
        }, function (error) {
            console.log('An error occurred while saving Post : ' + error);
        });
    };
    //update post
    BlogPostService.prototype.updatePostOnServer = function (id, updatedPostDto) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .put(_this.url + id, updatedPostDto, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_this.errorHandler.handleError('addPost')))
                .subscribe(function (response) {
                var index = _this.posts.findIndex(function (x) { return x.id = id; });
                if (index !== -1) {
                    _this.posts[index] = response;
                }
                else
                    console.log("Can't find post in the list" + response);
                _this.emitPostsSubject().then(function () {
                    resolve();
                });
            }, function (error) {
                console.log('An error occurred while updating Post : ' + error);
            });
        });
    };
    //delete post
    BlogPostService.prototype.deletePostFromServer = function (id) {
        var _this = this;
        this.httpClient
            .delete(this.url + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler.handleError('deletePost')))
            .subscribe(function () {
            _this.posts = _this.posts.filter(function (x) { return x.id != id; });
            console.log(_this.posts);
            console.log('Post id ' + id + ' was deleted');
            _this.emitPostsSubject();
            //this.router.navigate(['blog']);
        }, function (error) {
            console.log('An error occurred while deleting Post ' + id + ' : ' + error);
        });
    };
    BlogPostService.prototype.like = function (id) {
        var _this = this;
        this.httpClient
            .get(this.url + 'like/' + id)
            .subscribe(function () {
            _this.posts.find(function (x) { return x.id == id; }).likes++;
            console.log('Like incremented');
            _this.emitPostsSubject();
        }, function (error) {
            console.log('Like failed : ' + error);
        });
    };
    BlogPostService.prototype.disLike = function (id) {
        var _this = this;
        this.httpClient
            .get(this.url + 'dislike/' + id)
            .subscribe(function () {
            _this.posts.find(function (x) { return x.id == id; }).likes--;
            console.log('Like decremented');
            _this.emitPostsSubject();
        }, function (error) {
            console.log('DisLike failed : ' + error);
        });
    };
    BlogPostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _Helpers_ErrorHandler__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"]])
    ], BlogPostService);
    return BlogPostService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jbcamaret\source\repos\BlogInfo.API\BlogInfo.API\webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map