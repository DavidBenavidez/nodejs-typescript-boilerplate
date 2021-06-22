import { Router } from 'express';
import {
  Request,
  Response,
} from 'express';
import { userControllerImpl } from './controllers'

const router = Router();

router.get('/api/v1', (_: Request, res: Response) => {
  res.json({
    apiVersion: '1.0.0'
  })
});

router.get('/api/v1/users', userControllerImpl.list);


export default router;