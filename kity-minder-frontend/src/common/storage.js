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
  async get(key) {
    return await window.localforage.getItem(key);
  },
  async set(key, value) {
    await window.localforage.setItem(key, value);
  },
  async remove(key) {
    await window.localforage.removeItem(key);
  },
  async clear() {
    await localforage.clear();
  },
  local: new WebStorage(localStorage)
};
