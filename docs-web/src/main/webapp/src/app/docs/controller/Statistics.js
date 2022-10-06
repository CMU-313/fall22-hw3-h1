'use strict';

/**
 * Statistics controller.
 */
angular.module('docs').controller('Statistics', function($scope, Restangular) {
  $scope.gpa = { name: '', color: '#3a87ad' };
  $scope.gre = { name: '', color: '#3a87ad' };
  $scope.score = { name: '', color: '#3a87ad' };

  // Retrieve statistics
  $scope.GPAs = [1, 3, 5];
  $scope.GREs = [2, 4, 6];
  $scope.scores = [10, 11, 12];
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