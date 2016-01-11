(function(){
 angular.module('redminetraker.core')
  .config(Router);

  Router.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Router($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('access',{
        url: '',
        templateUrl: 'js/access/index.html',
        controller: 'Access as access'
      });

      $urlRouterProvider.otherwise('access');
  }
 })();
