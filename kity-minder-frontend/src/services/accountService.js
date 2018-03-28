import { storage } from '../common';
import { ServiceBase } from './ServiceBase';

const USER_TOKEN_TOKEN = 'x-token';

class AccountService extends ServiceBase {
  _calledAutoLogin = false; // 是否调用过自动登录
  isLogged = false; // 是否已登录
  user = null; // 用户信息
  constructor() {
    super(AppConf.apiHost);
  }

  // 用户token
  get token() {
    return storage.local.get(USER_TOKEN_TOKEN);
  }

  _setUserInfo(data) {
    storage.local.set(USER_TOKEN_TOKEN, data.token);
    this.isLogged = true;
  }

  async doLogin(username, password) {
    const { data } = await this.post(`/account/login`, { username, password });
    this._setUserInfo(data);
    return data;
  }

  async doAutoLogin(token) {
    const { data } = await this.post('/account/autologin', null, { headers: { 'x-token': token } });
    this._setUserInfo(data);
    return data;
  }

  async doLogout() {
    this.isLogged = false;
    storage.local.remove(USER_TOKEN_TOKEN);
  }

  /**
   * 检查是否已登录
   */
  async checkIsLogged() {
    if (this.isLogged) {
      return this.isLogged;
    }
    const token = this.token;
    if (token && !this._calledAutoLogin) {
      this._calledAutoLogin = true;
      await this.doAutoLogin(token);
    }
    return this.isLogged;
  }
}

export const accountService = new AccountService();
