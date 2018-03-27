const config = require('../config');
const { db } = require('../common');
// 初始化账户Service
const DefaultAccountService = require('../services/DefaultAccountService');

const doLogin = async ctx => {
  await db;
};

const doAutoLogin = async ctx => {};

module.exports = {
  doLogin,
  doAutoLogin
};
