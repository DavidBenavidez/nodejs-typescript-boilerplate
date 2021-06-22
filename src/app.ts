import * as express from 'express';
import * as helmet from 'helmet';
import * as logger from 'morgan';

import { PORT } from './config/constants';
import routes from './routes';

export class App {
  private app: express.Express;
  private port: string;

  constructor() {
    this.app = express();
    this.port = PORT;

    this.setMiddlewares();
    this.setRoutes();
  }

  setMiddlewares(): void {
    // default headers, bodyparser, and logger
    this.app.use(helmet({ crossOriginResourcePolicy: true }));
    this.app.use(express.json());
    this.app.use(logger('dev'));
  }

  setRoutes(): void {
    this.app.use(routes);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on ${this.port}`);
    })
  }
}