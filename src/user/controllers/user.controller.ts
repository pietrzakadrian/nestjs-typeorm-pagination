import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiPaginatedResponse } from 'src/common/decorators/api-paginated-response.decorator';
import { PageDto, PageOptionsDto } from 'src/common/dtos';
import { UserDto } from '../dtos/user.dto';
import { UserService } from '../services/user.service';

@Controller('Users')
@ApiTags('Users')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiPaginatedResponse(UserDto)
  async getUsers(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<UserDto>> {
    return this._userService.getUsers(pageOptionsDto);
  }
}
