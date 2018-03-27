-- 创建用户表
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID、自增主键',
  `username` varchar(50) NOT NULL COMMENT '用户名',
  `password` varchar(200) NOT NULL COMMENT '密码',
  `nickName` varchar(50) NOT NULL COMMENT '昵称',
  `avatarUrl` varchar(500) NOT NULL COMMENT '头像地址',
  `createDate` bigint(20) NOT NULL COMMENT '创建日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--创建思维导图表
CREATE TABLE `mind` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID、主键自增',
  `userId` int(11) NOT NULL COMMENT '所有者ID',
  `sourceId` int(11) NOT NULL DEFAULT '0' COMMENT '来源ID、针对fork mind',
  `name` varchar(200) NOT NULL COMMENT '思维导图名称',
  `createDate` bigint(20) NOT NULL COMMENT '创建时间',
  `lastUpdateDate` bigint(20) NOT NULL COMMENT '最后更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 创建思维导图数据表
CREATE TABLE `mind_version` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID、自增主键',
  `mindId` int(11) NOT NULL COMMENT '思维导图ID',
  `versionNo` varchar(50) NOT NULL COMMENT '版本号',
  `saveDate` bigint(20) NOT NULL COMMENT '保存时间，针对数据只读',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注（本次更新备注）',
  `mindData` text COMMENT '思维导图内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 插入数据

INSERT INTO `user`(`username`,`password`,`nickName`,`avatarUrl`,`createDate`)
VALUES('admin', '09Rq6pzV+BjnUJTZqKcmCAyUPsM=', 'Admin', '', unix_timestamp() * 1000)
