import { storage } from '../common';
import { ServiceBase } from './ServiceBase';

class MinderService extends ServiceBase {
  constructor() {
    super(AppConf.apiHost);
  }
  async getMyMinderList() {
    const { data } = await this.get(`/minders`);
    return data;
  }
  async createMinder() {
    const { data } = await this.post(`/minders`, { name: 'xxxx' });
    return data;
  }
}

export const minderService = new MinderService();
