import {
  usersRepository,
} from '../repository'

import makeListUsers from './list-users'
export const listUsers = makeListUsers({
  usersRepository,
});