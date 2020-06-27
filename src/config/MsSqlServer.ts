import { Sequelize } from "sequelize";
import dotEnv from 'dotenv';

const PRODUCTION = process.env.PRODUCTION_SERVER || 'no';
if(PRODUCTION === 'no'){
  dotEnv.config();
}

const MSSQL_DATABASE = 'heroes';
const MSSQL_USER = 'SA';
const MSSQL_PASSWORD = 'Password1!';
const MSSQL_HOST = 'localhost';

export const mySqlDatabase = new Sequelize(MSSQL_DATABASE, MSSQL_USER, MSSQL_PASSWORD, {
    host: MSSQL_HOST,
    dialect: 'mssql'
});