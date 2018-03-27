const { db } = require('../common');

class DefaultAccountService {
  constructor() {}

  async doLogin(username, password) {
    return {
      username: 'xxxx',
      nickName: 'Admin',
      avatarUrl: ''
    };
  }
}
module.exports = DefaultAccountService;
