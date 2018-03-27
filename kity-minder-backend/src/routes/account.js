const Router = require('koa-router');
const config = require('../config');
const { accountBiz } = require('../bizs');

const router = new Router({
  prefix: `${config.apiPrefix}/account`
});

router.post('/login', accountBiz.doLogin); // 根据账户、密码进行登录
router.post('/autologin', accountBiz.doAutoLogin); // 根据Token，进行自动登录

module.exports = {
  router
};
