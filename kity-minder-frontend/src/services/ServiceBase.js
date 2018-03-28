import axios from 'axios';

export class ServiceBase {
  constructor(baseURL) {
    this.baseURL = baseURL || '';
  }

  /**
   * 执行GET请求
   * @param {string} url URL参数
   * @param {any} options
   */
  get(url, options) {
    return this._request('get', url, null, options);
  }

  post(url, data, options) {
    return this._request('post', url, data, options);
  }

  put(url, data, options) {
    return this._request('put', url, data, options);
  }

  delete(url, options) {
    return this._request('delete', url, null, options);
  }

  _request(method, url, data, options) {
    const config = Object.assign({}, this._buildOptions(options), {
      method,
      url,
      data,
      baseURL: this.baseURL
    });
    return axios(config);
  }

  _buildOptions(options) {
    return options;
  }
}
