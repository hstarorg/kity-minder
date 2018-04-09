const path = require('path');
module.exports = {
  routesPath: path.join(__dirname, 'routes'),
  port: 7777,
  apiPrefix: '/api/v1',
  debug: true,
  tokenKey: 'x-token',
  dbConfig: {
    // 账户配置信息
    connectionLimit: 10,
    host: '192.168.1.200',
    port: 3308,
    user: 'root',
    password: 'humin',
    database: 'kityminder_db'
  },
  hashKey: 'dfe1e4596abecd991c5e92d0956acf2f' // 通过 crypto.randomBytes(16).toString('hex') 计算得出
};
