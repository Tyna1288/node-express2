/** Shared config for application; can be req'd many places. */
"use strict";


require('dotenv').config();


const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';

const PORT = +process.env.PORT || 3000;

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 10;

const DB_URI =
  process.env.NODE_ENV === 'test'
    ? 'postgresql://postgres:1234567@localhost:5433/bankly_test'
    : process.env.DATABASE_URL || "postgresql://postgres:1234567@localhost:5433/bankly";


module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI
};
