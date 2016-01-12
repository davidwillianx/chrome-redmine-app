(function(){ angular.module('redminetraker.dash')
 .controller('Dash', Dash)

 Dash.$inject = ['$scope', 'Issue'];

 function Dash($scope, Issue){
   var dash = this;
   dash.title = 'nothing';
   dash.issues = [];
   dash.start = _startCountTimeIssue;
   dash.stop = _stopCountTimeIssue;

    init();

    function init() {
      Issue.all().then(function (redmineResponse) {
         dash.issues =  redmineResponse.issues;
      });
    }

    function _startCountTimeIssue(){
      console.log('starting');
    }

    function _stopCountTimeIssue() {
      console.log('stopping');
    }
 }
})();
