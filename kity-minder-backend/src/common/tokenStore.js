class TokenStore {
  /**
   * TokenStore构造函数
   * @param {object} options
   * @param {number} options.maxAge 最大存活多长时间（ms）
   * @param {number} options.ttl 每次使用，顺延多长时间（ms）
   */
  constructor(options) {
    this.options = options;
    this.map = new Map();
  }

  set(key, value) {
    const now = Date.now();
    const hasKey = this.map.has(key);
    const valObject = hasKey ? this.map.get(key) : { absoluteExpirationTime: now + this.options.maxAge };
    valObject.value = value;
    valObject.expirationTime = now + this.options.ttl;
    if (!hasKey) {
      this.map.set(key, valObject);
    }
  }

  get(key) {
    if (!this.map.has(key)) {
      return null;
    }
    const now = Date.now();
    const valObject = this.map.get(key);
    if (now <= valObject.expirationTime && now <= valObject.absoluteExpirationTime) {
      return valObject.value;
    } else {
      this.map.delete(key);
      return null;
    }
  }
}

module.exports = new TokenStore({ maxAge: 1000 * 60 * 60 * 24 * 7 /* 7天 */, ttl: 1000 * 60 * 60 * 24 /* 1天 */ });
