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
  /**
   * 创建思维导图
   * @param {*} minderInfo
   */
  async createMinder(minderInfo) {
    const { data } = await this.post(`/minders`, { name: minderInfo.name || '' });
    return data;
  }
  /**
   *   保存思维导图数据
   * @param {number} minderId 思维导图ID
   * @param {string} data 数据
   */
  async saveMinderData(minderId, data) {
    const res = await this.put(`/minders/${minderId}/data`, { data });
    return res.data;
  }

  /**
   * 获取Minder详情
   * @param {number} minderId
   */
  async getMinderInfoById(minderId) {
    const { data } = await this.get(`/minders/${minderId}`);
    return data;
  }
  /**
   * 删除思维导图
   * @param {number} minderId
   */
  async deleteMinderById(minderId) {
    const { data } = await this.delete(`/minders/${minderId}`);
    return data;
  }
}

export const minderService = new MinderService();
