class WebStorage {
  constructor(storage) {
    this.storage = storage;
  }

  get(key) {
    const valueStr = this.storage.getItem(key);
    try {
      return JSON.parse(valueStr);
    } catch (e) {
      return null;
    }
  }

  set(key, value) {
    const valueStr = JSON.stringify(value);
    this.storage.setItem(key, valueStr);
  }

  remove(key) {
    return this.storage.removeItem(key);
  }
}
export const storage = {
  local: new WebStorage(localStorage)
};
