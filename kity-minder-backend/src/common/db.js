const mysql = require('mysql');
const { DBProviders: { MysqlClient } } = require('fast-koa');
const config = require('../config');
const pool = mysql.createPool(config.dbConfig);

module.exports = new MysqlClient(pool);
