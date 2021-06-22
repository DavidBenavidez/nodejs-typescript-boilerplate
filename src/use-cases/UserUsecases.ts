import {
  UserRepository,
} from '../repository';

export class UserUseCases {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  listUsers = async () => {
    const users = await this.userRepository.findAll();

    return users;
  }
}