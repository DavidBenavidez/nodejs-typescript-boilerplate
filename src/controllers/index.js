// import use cases and unject them here
import { listUsers } from '../use-cases';
import makeUsersController from './users';


export const usersController = makeUsersController({
  listUsers,
})
