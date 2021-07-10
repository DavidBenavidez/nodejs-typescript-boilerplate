import {
  User,
} from '../models';
import {
  getRepository,
 } from 'typeorm';

export class UserRepository {
  async findAll() {
    const result = await getRepository(User).find();

    return result;
  }
}