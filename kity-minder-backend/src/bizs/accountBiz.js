const config = require('../config');
const { util, tokenStore, db } = require('../common');
const { UserSqls } = require('./sqlstore');

const _buildUser = (token, user) => ({ token, user });

const doLogin = async ctx => {
  const { body } = ctx.request;
  const sqlParams = {
    username: body.username,
    password: util.hmacSha1(body.password, config.hashKey)
  };
  const user = await db.executeScalar(UserSqls.QUERY_USER_BY_USERNAME_PASSWORD, sqlParams);
  if (!user) {
    util.throwError('账户名密码不匹配');
  }
  const token = util.buildToken();
  tokenStore.set(token, user);
  ctx.body = _buildUser(token, user);
};

const doAutoLogin = async ctx => {
  const token = ctx.headers['x-token'];
  if (token) {
    const user = tokenStore.get(token);
    if (user) {
      return (ctx.body = _buildUser(token, user));
    }
  }
  ctx.status = 401;
  ctx.body = true;
};

module.exports = {
  doLogin,
  doAutoLogin
};
