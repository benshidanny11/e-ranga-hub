import express from "express";
import { Sequelize } from 'sequelize';
import dbConfig from './db/config/config.js';
import db from './db/models/index.js';
const app = express();
const PORT = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';

app.use(express.json());
const sequelize = new Sequelize(dbConfig[env]);
const { sequelize: dbCon } = db;
app.get('/', (req, res) => {
    res.json({'message':'Welcome to eranga hub!'});
});


app.listen(PORT, () => {

    dbCon
  .sync()
  .then(() => {
        console.log(
            `Database succesfully connected ✅\nPID: ${process.pid} Server listening on port: ${PORT} in ${process.env.NODE_ENV} mode 😊`
          );
    })
    .catch(err => {
       // console.error('Unable to connect to the database:', err);
        throw(err);
    });
});