const { db, util } = require('../common');
const { MinderSqls } = require('./sqlstore');
const { MinderValidator } = require('./validators');

const createMinder = async ctx => {
  const { user } = ctx.state;
  const now = Date.now();
  const sqlParams = {
    userId: user.id,
    sourceId: 0,
    name: '新建思维脑图',
    createDate: now,
    lastUpdateDate: now,
    status: 'active'
  };
  const minderId = await db.executeInsert(MinderSqls.CREATE_MINDER, sqlParams);
  ctx.status = 201;
  ctx.body = '';
};

const deleteMinder = async ctx => {
  const { user } = ctx.state;
  const { minderId } = ctx.params;
  const sqlParams = {
    status: 'deleted',
    id: minderId,
    userId: user.id,
    lastUpdateDate: Date.now()
  };
  const changeCount = await db.executeNonQuery(MinderSqls.UPDATE_MINDER_STATUS, sqlParams);
  ctx.status = 202;
  ctx.body = '';
};

const updateMinder = async ctx => {
  const { user } = ctx.state;
  const { minderId } = ctx.params;
  const { body } = ctx.request;
  const sqlParams = {
    id: minderId,
    name: body.name || '',
    userId: user.id,
    lastUpdateDate: Date.now()
  };
  const changeCount = await db.executeNonQuery(MinderSqls.UPDATE_MINDER_NAME, sqlParams);
  ctx.status = 202;
  ctx.body = '';
};

const updateMinderData = async ctx => {
  const { user } = ctx.state;
  const { minderId } = ctx.params;
  const { body } = ctx.request;
  const sqlParams = {
    id: minderId,
    status: 'active'
  };
  // 先找到minder
  const minder = await db.executeScalar(MinderSqls.GET_MINDER_BY_ID_STATUS, sqlParams);
  if (!minder || minder.userId !== user.id) {
    // 找不到或者所有权不对
    return util.throwError('权限不足', 403);
  }
  const minderVersion = {
    mindId: minderId,
    versionNo: util.buildVersionNO(user.id),
    saveDate: Date.now(),
    remark: '',
    mindData: body.data || ''
  };
  await db.executeInsert(MinderSqls.INSERT_MINDER_VERSION, minderVersion);
  ctx.status = 202;
  ctx.body = '';
};

const getMinderListByUser = async ctx => {
  const { user } = ctx.state;
  const sqlParams = {
    userId: user.id,
    status: 'active'
  };
  const minderList = await db.executeQuery(MinderSqls.GET_MINDERS_BY_USER_STATUS, sqlParams);
  ctx.body = minderList;
};

const getMinderDetail = async ctx => {
  const { user } = ctx.state;
  const { minderId } = ctx.params;
  const sqlParams = { id: minderId, userId: user.id };
  const minder = await db.executeScalar(MinderSqls.GET_MINDER_LATEST_DETAIL, sqlParams);
  ctx.body = minder;
};

const getMinderDetailByVersion = async ctx => {
  const { user } = ctx.state;
  const { minderId, version } = ctx.params;
  const sqlParams = { id: minderId, userId: user.id, versionNo: version };
  const minder = await db.executeScalar(MinderSqls.GET_MINDER_DETAIL_BY_VERSION, sqlParams);
  ctx.body = minder;
};

module.exports = {
  createMinder,
  deleteMinder,
  updateMinder,
  updateMinderData,
  getMinderListByUser,
  getMinderDetail,
  getMinderDetailByVersion
};
