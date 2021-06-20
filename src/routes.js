import { Router } from 'express';
import { usersController } from './controllers'

const router = Router();

router.get('/api/v1', (_, res) => {
  res.json({
    apiVersion: '1.0.0'
  })
});

router.get('/api/v1/users', usersController.list);


export default router;