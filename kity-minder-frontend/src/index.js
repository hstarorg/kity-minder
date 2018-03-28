import './config';

import { util } from './common';
import { PAGES } from './pages';
import { routes } from './routes';
import { accountService } from './services';

const app = angular.module('kity-minder-app', ['ui.router', 'kityminderEditor']);
// 配置路由模式
app.config([
  '$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  }
]);
// 配置kityminder-editor文件上传地址
app.config([
  'configProvider',
  function(configProvider) {
    configProvider.set('imageUpload', '../server/imageUpload.php');
  }
]);

app.config([
  '$stateProvider',
  '$transitionsProvider',
  ($stateProvider, $transitionsProvider) => {
    // 加载路由
    routes.forEach(state => $stateProvider.state(state));
    // 校验登录状态
    $transitionsProvider.onStart({ to: 'layout.**' }, async function(trans) {
      var $state = trans.router.stateService;
      if (!await accountService.checkIsLogged()) {
        return $state.target('login');
      }
    });
  }
]);

// 加载组件
util.loadComponents(app, PAGES);

// 启动
angular.bootstrap(document, ['kity-minder-app']);
