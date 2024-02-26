import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    database: 'erangadb',
    password: 'danny123',
    dialect: 'postgres',
    username: 'dannybenshi',
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    logging: false,
  },
  production: {
    connectionString: '',
    dialect: 'postgres',
  },
};
