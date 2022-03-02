import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserEntity) private userRepo: Repository<UserEntity>){}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepo.create(createUserDto);
      await user.save();
      return user.toJson();
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY'){
        throw new ConflictException('Email has already been taken')
      }
      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return this.userRepo.find();
  }

  
  async findOne(id: number) {
    const user =  await this.userRepo.findOne(id);
    if (user) {
      return user;
    }
    throw new NotFoundException(`Requested user was not found`);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
