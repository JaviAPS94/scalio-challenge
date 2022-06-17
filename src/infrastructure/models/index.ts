import { PostModel } from './Post.model';
import { POST_MODEL_PROVIDER } from '@constants';

export const modelProviders = [
  {
    provide: POST_MODEL_PROVIDER,
    useValue: PostModel,
  },
];
