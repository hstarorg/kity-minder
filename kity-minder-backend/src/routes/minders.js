const Router = require('koa-router');
const config = require('../config');
const { minderBiz, accountBiz } = require('../bizs');

const router = new Router({
  prefix: `${config.apiPrefix}/minders`
});

router.use(accountBiz.mustLogin);

router
  // 创建Minder
  .post('/', minderBiz.createMinder)
  // 删除Minder
  .delete('/:minderId', minderBiz.deleteMinder)
  // 强制删除Minder
  .delete('/:minderId/force', minderBiz.forceDeleteMinder)
  // 更新Minder
  .put('/:minderId', minderBiz.updateMinder)
  // 更新具体的Minder数据
  .put('/:minderId/data', minderBiz.updateMinderData)
  // 撤销删除Minder
  .put('/:minderId/set_active', minderBiz.undoDeleteMinder)
  // 查询Minder列表
  .get('/', minderBiz.getMinderListByUser)
  // 获取回收站列表
  .get('/trash', minderBiz.getTrashMinderList)
  // 获取特定的Minder详情
  .get('/:minderId', minderBiz.getMinderDetail)
  // 获取特定版本的Minder详情
  .get('/:minderId/:version', minderBiz.getMinderDetailByVersion);

module.exports = {
  router
};
