import { router } from './router.config';

const app = angular.module('kity-minder-app', ['ngRoute', 'ngComponentRouter', 'kityminderEditor']);
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
// 入口组件
app.value('$routerRootComponent', 'kityminderApp');

router.init(app);

angular.bootstrap(document, ['kity-minder-app']);
