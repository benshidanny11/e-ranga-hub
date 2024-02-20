import dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    name: 'erangadb',
    host: process.env.DB_SERVER,
    username: 'dannybenshi',
    password: process.env.DB_PASSWORD,
    dialect: "postgres"
  },
  "production": {
    connectionString: '',
    dialect: 'postgres',
  }
}
