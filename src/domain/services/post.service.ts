import { Injectable, Inject } from '@nestjs/common';
import { Post } from '@domain/entities/Post';
import { PostRepository } from '@infrastructure/repository/post.repository';

@Injectable()
export class PostService {
  constructor(private readonly repository: PostRepository) {}

  async findById(id: number): Promise<Post> | undefined {
    return await this.repository.findById(id);
  }

  async find(): Promise<Post[]> {
    return await this.repository.find();
  }
}
