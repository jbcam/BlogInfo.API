export class Post {
  id: number;
  title: string;
  contents: string;
  likes: number;
  createdAt: Date;
}

export class PostDto {
  title: string;
  contents: string;
    
  constructor(title, contents) {
    this.title = title;
    this.contents = contents;
  }
}


