const app = angular.module('kity-minder-app', ['ngRoute', 'kityminderEditor']);
app.config([
  '$locationProvider',
  $locationProvider => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);

app.config([
  'configProvider',
  function(configProvider) {
    configProvider.set('imageUpload', '../server/imageUpload.php');
  }
]);

app.config([
  '$routeProvider',
  $routeProvider => {
    $routeProvider.when('/', {
      template: 'Hoe'
    });
    $routeProvider.when('/core/404', {
      template: '<h1>404 Not Found</h1>'
    });
    $routeProvider.when('/core/loading', {
      template: 'Loading'
    });
    $routeProvider.otherwise('/404');
  }
]);

app.controller('MainController', [
  '$scope',
  function($scope) {
    $scope.initEditor = function(editor, minder) {
      window.editor = editor;
      window.minder = minder;
    };
  }
]);

// app.run([
//   '$location',
//   $location => {
//     let path = $location.path();
//     if (path === '/core/loading') {
//       $location.path('/');
//     }
//   }
// ]);
alert('xxxfdasfdsf');

angular.bootstrap(document, ['kity-minder-app']);
