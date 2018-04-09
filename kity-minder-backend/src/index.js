const path = require('path');
const fastKoa = require('fast-koa');
const config = require('./config');
const errorHandler = require('./middlewares/error-handler');

fastKoa.initApp({
  routesPath: config.routesPath,
  enableCors: true,
  onRoutesLoading(app) {
    app.use(errorHandler({ env: config.debug ? 'development' : 'production' }));
  }
});

fastKoa
  .listen(config.port)
  .then(server => {
    const addr = server.address();
    console.log(`Server started. listen ${addr.port}`);
  })
  .catch(console.error);
