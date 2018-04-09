const { db } = require('../common');
const { MinderSqls } = require('./sqlstore');

const createMinder = async ctx => {
  const { user } = ctx.state;
};

const deleteMinder = async ctx => {
  const { user } = ctx.state;
  const { minderId } = ctx.params;
};

const updateMinder = async ctx => {
  const { user } = ctx.state;
  const { minderId } = ctx.params;
};

const getMinderListByUser = async ctx => {
  const { user } = ctx.state;
};

const getMinderDetail = async ctx => {
  const { user } = ctx.state;
  const { minderId } = ctx.params;
};

const getMinderDetailByVersion = async ctx => {
  const { user } = ctx.state;
  const { minderId, version } = ctx.params;
};

module.exports = {
  createMinder,
  deleteMinder,
  updateMinder,
  getMinderListByUser,
  getMinderDetail,
  getMinderDetailByVersion
};
