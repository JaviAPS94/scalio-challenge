import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from '../../../../src/domain/services/post.service';
import { mocksPosts } from '../../../mocks/mock-post';
import { AppModule } from '../../../../src/app.module';

describe('PostService', () => {
  let postService: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    postService = module.get<PostService>(PostService);
  });

  it('should return a post by id', async () => {
    const postId = 1;
    const expectedResult = mocksPosts[0];

    const result = await postService.findById(postId);

    expect(result).toEqual(expectedResult);
  });

  it('should return a undefined post', async () => {
    const postId = 0;

    const result = await postService.findById(postId);

    expect(result).toEqual(undefined);
  });

  it('should return all posts', async () => {
    const expectedResult = mocksPosts;

    const result = await postService.find();

    expect(result).toEqual(expectedResult);
  });
});
