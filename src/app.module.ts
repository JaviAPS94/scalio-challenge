import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PostController } from './application/controllers/post.controller';
import { PostService } from './domain/services/post.service';
import { modelProviders } from './infrastructure/models';
import { PostRepository } from './infrastructure/repository/post.repository';
import { LoggerMiddleware } from './application/middleware/logger.middleware';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './application/controllers/health.controller';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [PostController, HealthController],
  providers: [PostService, PostRepository, ...modelProviders],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(PostController);
  }
}
