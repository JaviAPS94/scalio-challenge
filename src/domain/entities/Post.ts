import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
// tslint:disable-next-line: max-classes-per-file
export class Post {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  title: string;

  @IsString()
  body: string;
}
