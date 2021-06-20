import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import {} from 'dotenv/config';

// import local files
import { PORT } from './config/constants';
import routes from './routes';

const app = express();

// default headers, bodyparser, and logger
app.use(helmet({ crossOriginResourcePolicy: true }));
app.use(express.json());
app.use(logger('dev'));

// Initialize Routes
app.use(routes);

export const initialize = async () => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  })
};

initialize();