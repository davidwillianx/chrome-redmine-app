(function(){
 angular.module('redminetraker.access')
 .controller('Access', Access);

 Access.$inject = ['$scope', '$state', 'User'];

 function Access($scope, $state, User){
   access = this;
   access.signin = signin;

   function signin(user) {
     User.login(user).then(function (data) {
       $state.go('');
     });
   }
 }
})();
