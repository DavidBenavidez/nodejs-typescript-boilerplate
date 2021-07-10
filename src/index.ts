import 'dotenv/config';
import { connectToDatabase } from './typeorm/connection';

import { App } from './app';

const initialize = async () => {
  await connectToDatabase();

  const app = new App();

  app.start();
}

initialize();

