import {
  Connection,
  createConnection,
} from "typeorm";
import { User } from '../models'

export const connectToDatabase = async(): Promise<Connection | null> => {
  try {
    const {
      DB_NAME,
      DB_HOST,
      DB_PASSWORD,
      DB_PORT,
      DB_USER,
    } = process.env;


    const connection = await createConnection({
      type: 'mysql',
      host: DB_HOST,
      port: +DB_PORT,
      logging: true,
      synchronize: false,

      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,

      entities: [User],
    });

    console.log(`Successfully connected to database. Connection name: '${connection.name}', port: `, DB_PORT);
  } catch (err) {
    console.log(err);
  }
  return null;
};
