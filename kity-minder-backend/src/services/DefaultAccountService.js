const { util } = require('../common');

console.log(util.hmacSha1('admin', 'dfe1e4596abecd991c5e92d0956acf2f'));

class DefaultAccountService {
  constructor() {}

  doLogin(username, password) {}

  doAutoLogin(token) {}
}
module.exports = DefaultAccountService;
