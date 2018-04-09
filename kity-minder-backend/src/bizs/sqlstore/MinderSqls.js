module.exports = {
  CREATE_MINDER: `
  INSERT INTO mind(userId, sourceId, name, createDate, lastUpdateDate, status)
	VALUES(@userId, @sourceId, @name, @createDate, @lastUpdateDate, @status);
  `,
  UPDATE_MINDER_STATUS: `
  UPDATE mind
  SET status = @status, lastUpdateDate = @lastUpdateDate
  WHERE id = @id AND userId = @userId;
  `,
  UPDATE_MINDER_NAME: `
  UPDATE mind
  SET name = @name, lastUpdateDate = @lastUpdateDate
  WHERE id = @id AND userId = @userId;
  `,
  GET_MINDERS_BY_USER_STATUS: `
  SELECT * FROM mind
  WHERE userId = @userId AND status = @status;
  `,
  GET_MINDER_LATEST_DETAIL: `
  SELECT t1.*, t2.versionNo, t2.saveDate, t2.remark, t2.mindData
  FROM mind t1
  LEFT JOIN mind_version t2 ON t1.id = t2.mindId
  WHERE t1.id = @id AND t1.userId = @userId
  ORDER BY t2.id DESC
  LIMIT 1;
  `,
  GET_MINDER_DETAIL_BY_VERSION: `
  SELECT t1.*, t2.versionNo, t2.saveDate, t2.remark, t2.mindData
  FROM mind t1
  LEFT JOIN mind_version t2 ON t1.id = t2.mindId
  WHERE t1.id = @id AND t1.userId = @userId AND t2.versionNo = @versionNo
  ORDER BY t2.id DESC
  LIMIT 1;
  `
};
