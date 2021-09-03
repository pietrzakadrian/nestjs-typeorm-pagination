import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  public firstName: string;

  @ApiProperty()
  public lastName: string;
}
