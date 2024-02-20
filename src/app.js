import express from "express";
import { Sequelize } from 'sequelize';
import dbConfig from './db/config/config.js';

const app = express();
const PORT = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';

app.use(express.json());
console.log(dbConfig[env])
const sequelize = new Sequelize(dbConfig[env]);

app.get('/', (req, res) => {
    res.json({'message':'Welcome to eranga hub!'});
});


app.listen(PORT, () => {

    sequelize.authenticate()
    .then(() => {
        console.log(
            `Database succesfully connected ✅\nPID: ${process.pid} Server listening on port: ${port} in ${process.env.NODE_ENV} mode 😊`
          );
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        throw(err);
    });
});