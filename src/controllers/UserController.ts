import { Request, Response } from 'express';

import {
  UserUseCases,
} from '../use-cases';

export class UserController {
  private useCases: UserUseCases;

  constructor(useCases: UserUseCases) {
    this.useCases = useCases;
  }

  list = async (_: Request, res: Response) => {
    const users = await this.useCases.listUsers();

    return res.json({
      users,
      result: true,
      statusCode: 200,
    });
  }
}