import * as dotenv from 'dotenv';
dotenv.config();

export const APP_PORT = process.env.PORT || 4000;
export const APP_HOST = process.env.APP_HOST || '0.0.0.0';
export const POST_MODEL_PROVIDER = 'PostModelProvider';
