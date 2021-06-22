import 'dotenv/config';
import { connectToDatabase } from './typeorm/connection';

import { App } from './app';

(new App()).start();

(async () => {
  await connectToDatabase();
})();
