(function(){
  angular.module('redminetraker', [
    'redminetraker.core',
    'redminetraker.dataProvider',
    'redminetraker.access',
    'redminetraker.dash'
  ], clearDecoratorHistoryProvider);

   function clearDecoratorHistoryProvider($provide) {
     $provide.decorator('$window', function ($delegate) {
       $delegate.history = null;
       return $delegate;
     });
   }
})();
