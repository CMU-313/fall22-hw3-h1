'use strict';

/**
 * Statistics controller.
 */
angular.module('docs').controller('Statistics', function($scope, Restangular) {

  // Retrieve statistics
  $scope.statistics = [
    {gpa: 1, gre: 10, score: 100},
    {gpa: 2, gre: 20, score: 200},
    {gpa: 3, gre: 30, score: 300}
  ];
//   $scope.loadStatistics = function() {
//     Restangular.one('GPA/list').get().then(function(data) {
//       $scope.GPAs = data.GPAs;
//     });
//     Restangular.one('GRE/list').get().then(function(data) {
//         $scope.GREs = data.GREs;
//       });
//       Restangular.one('score/list').get().then(function(data) {
//         $scope.scores = data.scores;
//       });
//   };
//   $scope.loadStatistics();

});