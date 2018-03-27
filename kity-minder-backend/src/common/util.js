const crypto = require('crypto');

module.exports = {
  hmacSha1(text, key) {
    const hmacSha1 = crypto.createHmac('sha1', key);
    hmacSha1.update(text);
    return hmacSha1.digest().toString('base64');
  },
  buildToken() {
    return this.hmacSha1(Math.random().toString(16), Math.random().toString(16));
  }
};