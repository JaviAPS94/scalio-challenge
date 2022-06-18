import * as _ from 'lodash';
import { LoggerService, Context } from '@domain/services/logger.service';
import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { PostService } from '@domain/services/post.service';
import { FindPostDto } from '@application/dto/find-post.dto';
import { Post } from '@domain/entities/Post';
import { LoggingInterceptor } from '@application/interceptors/logging.interceptor';

@Controller('posts')
@UseInterceptors(LoggingInterceptor)
export class PostController {
  private Log: LoggerService = new LoggerService('createOperation');
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  @ApiOkResponse({
    description: 'Get post by id ok.',
    type: Post,
  })
  @ApiBadRequestResponse({
    description: 'Get post by id bad request because id is not a number',
  })
  @ApiNotFoundResponse({
    description: 'Get post by id not found',
  })
  async getById(@Param() params: FindPostDto): Promise<Post> {
    const context: Context = { module: 'PostController', method: 'getById' };
    this.Log.logger('Get post by id', context);

    const post = await this.postService.findById(params.id);

    if (_.isUndefined(post)) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `No post for id: ${params.id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return post;
  }

  @Get()
  @ApiOkResponse({
    description: 'Get all posts ok.',
    type: [Post],
  })
  async getAll(): Promise<Post[]> {
    const context: Context = { module: 'PostController', method: 'getAll' };
    this.Log.logger('Get all posts', context);
    return await this.postService.find();
  }
}
