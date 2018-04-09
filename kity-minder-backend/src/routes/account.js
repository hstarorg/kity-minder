const Router = require('koa-router');
const config = require('../config');
const { accountBiz } = require('../bizs');

const router = new Router({
  prefix: `${config.apiPrefix}/account`
});

router
  // 根据账户、密码进行登录
  .post('/login', accountBiz.doLogin)
  // 根据Token，进行自动登录
  .post('/autologin', accountBiz.doAutoLogin);

module.exports = {
  router
};
