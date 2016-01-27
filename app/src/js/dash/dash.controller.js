(function(){
  'use strict';

  angular.module('redminetraker.dash')
 .controller('Dash', Dash)

 Dash.$inject = ['$scope', 'Issue'];

 function Dash($scope, Issue){
   var vm = this;
   vm.issues = [];
   vm.isTimeRunning = null;
   vm.startTimer = _startCountTimeIssue;
   vm.stopTimer = _stopCountTimeIssue;


   console.log('this is my current scope');
   console.log($scope);


    init();

    function init() {
      Issue.all().then(function (redmineResponse) {
        vm.issues =  redmineResponse.issues;
      });
    }

    function _startCountTimeIssue(issue){
      vm.issue = issue;
      $scope.$broadcast('timer-start');
    }

    function _stopCountTimeIssue() {
      console.log('stopping');
    }
 }
})();
