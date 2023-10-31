import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository/user.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  //userservice importa
  constructor(private readonly userRepository: UserRepository, ) {}

  create(createUserDto: CreateUserDto) {
    var newUser = new User(
      createUserDto.id,
      createUserDto.name,
      createUserDto.email,
      createUserDto.image,
      createUserDto.valid,
      createUserDto.rfc,
      createUserDto.phone,
      createUserDto.address,
      createUserDto.city,
      createUserDto.state,
    );

    return this.userRepository.create(newUser);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
