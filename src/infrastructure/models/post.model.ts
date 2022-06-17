export class PostModel {
  constructor(post: PostModel | any) {
    this.userId = post.userId;
    this.id = post.id;
    this.title = post.title;
    this.body = post.body;
  }

  userId: number;
  id: number;
  title: string | undefined;
  body: string | undefined;
}
