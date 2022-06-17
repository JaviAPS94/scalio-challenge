import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PostController } from './application/controllers/post.controller';
import { PostService } from './domain/services/post.service';
import { modelProviders } from './infrastructure/models';
import { PostRepository } from './infrastructure/repository/post.repository';
import { LoggerMiddleware } from './application/middleware/logger.middleware';
import { TerminusModule } from '@nestjs/terminus';
import { TerminusOptionsService } from './infrastructure/health/terminus-options.check';

const HealthModule = TerminusModule.forRootAsync({
  useClass: TerminusOptionsService,
});

@Module({
  imports: [HealthModule],
  controllers: [PostController],
  providers: [PostService, PostRepository, ...modelProviders],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(PostController);
  }
}
