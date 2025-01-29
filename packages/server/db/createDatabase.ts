import { Client } from 'pg';

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
};

const dbName = process.env.DB_NAME;

export async function createDatabase() {
  const client = new Client(config);

  try {
    await client.connect();

    await client.query(`CREATE DATABASE ${dbName};`);
    console.log(`Database ${dbName} created successfully.`);
  } catch (error) {
    if ((error as { code: string }).code === '42P04') {
      console.log(`Database ${dbName} already exists.`);
    } else {
      console.error('Error creating database:', error);
    }
  } finally {
    await client.end();
  }
}
