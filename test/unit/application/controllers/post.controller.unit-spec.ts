import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from '../../../../src/domain/services/post.service';
import { PostController } from '../../../../src/application/controllers/post.controller';
import { mocksPosts } from '../../../mocks/mock-post';
import { PostRepository } from '../../../../src/infrastructure/repository/post.repository';
import { FindPostDto } from '../../../../src/application/dto/find-post.dto';

describe('Post Controller', () => {
  let postController: PostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [PostService, PostRepository],
    }).compile();
    postController = module.get<PostController>(PostController);
  });

  it('GET should return 200 when get posts is OK', async () => {
    const getPosts = (PostService.prototype.find = jest.fn());
    getPosts.mockReturnValue(mocksPosts);
    const expectedResult = mocksPosts;

    const returnedValue = await postController.getAll();
    expect(getPosts).toHaveBeenCalled();
    expect(returnedValue).toEqual(expectedResult);
  });

  it('GET should return 200 when get post by id is OK', async () => {
    const postId = 1;
    const findPostDto = new FindPostDto();
    findPostDto.id = postId;

    const getPostById = (PostService.prototype.findById = jest.fn());
    getPostById.mockReturnValue(mocksPosts[0]);
    const expectedResult = mocksPosts[0];

    const returnedValue = await postController.getById(findPostDto);
    expect(getPostById).toHaveBeenCalled();
    expect(returnedValue).toEqual(expectedResult);
  });

  it('GET should return 404 when get post by id not found', async () => {
    const postId = 0;
    const findPostDto = new FindPostDto();
    findPostDto.id = postId;

    const getPostById = (PostService.prototype.findById = jest.fn());
    getPostById.mockReturnValue(undefined);

    try {
      await postController.getById(findPostDto);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.response.error).toContain(`No post for id: ${postId}`);
      expect(error.status).toBe(HttpStatus.NOT_FOUND);
    }

    expect(getPostById).toHaveBeenCalled();
  });
});
