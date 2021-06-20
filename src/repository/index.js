import {
  User
} from '../models'
import makeUsersRepository from './users-repository.js';

export const usersRepository = makeUsersRepository({
  database: User
});