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
//     Restangular.one('statistic/list').get().then(function(data) {
//       $scope.statistics = data.statistics
//     });
    
//   };
//   $scope.loadStatistics();

});