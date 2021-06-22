import {
  User,
} from '../models';
import {
  getRepository,
  Repository,
 } from 'typeorm';

export class UserRepository {
  private database: Repository<User>;

  constructor() {
    this.database = getRepository(User);
  }

  async findAll() {
    const result = await this.database.find();

    return result;
  }
}