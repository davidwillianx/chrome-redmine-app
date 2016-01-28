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


    init();

    function init() {
      Issue.all().then(function (redmineResponse) {
        vm.issues =  redmineResponse.issues;
      });
    }

    function _startCountTimeIssue(issue){
	    console.log('im not the only one');
      vm.issue = issue;
      $scope.$broadcast('timer-start');
    }

    function _stopCountTimeIssue() {
      $scope.$broadcast('timer-stop');
    }
 }
})();
