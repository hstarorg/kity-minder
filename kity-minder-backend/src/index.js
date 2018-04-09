const path = require('path');
const fastKoa = require('fast-koa');
const config = require('./config');
const errorHandler = require('./middlewares/error-handler');
const { accountBiz } = require('./bizs');
const { tokenStore } = require('./common');

fastKoa.initApp({
  routesPath: config.routesPath,
  enableCors: true,
  onRoutesLoading(app) {
    app.use(errorHandler({ env: config.debug ? 'development' : 'production' }));
    app.use(accountBiz.setUserByToken);
  }
});

// 强制登录
if (config.debug) {
  tokenStore.set('test-token', {
    id: 1,
    username: 'admin',
    password: '09Rq6pzV+BjnUJTZqKcmCAyUPsM=',
    nickName: 'Admin',
    avatarUrl: 'https://avatars0.githubusercontent.com/u/4043284?s=460&v=4',
    createDate: 1520116955000
  });
}

fastKoa
  .listen(config.port)
  .then(server => {
    const addr = server.address();
    console.log(`Server started. listen ${addr.port}`);
  })
  .catch(console.error);
