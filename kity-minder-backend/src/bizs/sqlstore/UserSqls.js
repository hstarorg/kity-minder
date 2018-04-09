module.exports = {
  QUERY_USER_BY_USERNAME_PASSWORD: `
  SELECT *
  FROM user
  WHERE username = @username AND password = @password;
  `
};
