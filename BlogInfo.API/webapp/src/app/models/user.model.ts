export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}


export class UserDto {

  userName: string;
  password: string;


  constructor(userName, password) {

    this.userName = userName;
    this.password = password;

  }

}
