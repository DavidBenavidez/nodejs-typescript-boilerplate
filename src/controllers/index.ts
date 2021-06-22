// import use cases and unject them here
import { userUseCasesImpl } from '../use-cases';
import { UserController } from './UserController';

export const userControllerImpl = new UserController(userUseCasesImpl);