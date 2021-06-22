import {
  userRepositoryImpl,
} from '../repository'

import { UserUseCases } from './UserUsecases'


export const userUseCasesImpl = new UserUseCases(userRepositoryImpl);

export {
  UserUseCases,
}