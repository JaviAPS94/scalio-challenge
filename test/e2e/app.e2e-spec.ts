import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { INestApplication } from '@nestjs/common';
import { mocksPosts } from '../mocks/mock-post';
import * as request from 'supertest';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => {
    console.log('Done');
  });

  it('/ (GET HEALTH)', () => {
    return request(app.getHttpServer()).get('/health').expect(200);
  });

  it('/ (GET ALL POSTS)', () => {
    return request(app.getHttpServer())
      .get('/posts')
      .expect(200)
      .expect(mocksPosts);
  });

  it('/ (GET POST BY ID)', () => {
    const postId = 1;
    return request(app.getHttpServer())
      .get(`/posts/${postId}`)
      .expect(200)
      .expect(mocksPosts[0]);
  });

  it('/ (GET POST BY ID NOT FOUND)', () => {
    const postId = 0;
    return request(app.getHttpServer()).get(`/posts/${postId}`).expect(404);
  });
});
