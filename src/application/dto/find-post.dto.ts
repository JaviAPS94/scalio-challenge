import { IsNumberString } from 'class-validator';

export class FindPostDto {
  @IsNumberString()
  id: number;
}
