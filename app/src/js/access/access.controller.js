(function(){
 angular.module('redminetraker.access')
 .controller('Access', Access);

 Access.$inject = ['$scope', 'User'];

 function Access($scope, User){
   access = this;
   access.name = 'bogloblo';
   access.signin = signin;

   function signin(user) {
     User.login(user).then(function (data) {
       console.log(data);
     });
   }
 }
})();
