'use strict';

/**
 * Statistics controller.
 */
angular.module('docs').controller('Statistics', function($scope, Restangular) {
  $scope.sortColumn = 3;
  $scope.asc = false;
  $scope.offset = 0;
  $scope.currentPage = 1;
  $scope.limit = _.isUndefined(localStorage.documentsPageSize) ? '10' : localStorage.documentsPageSize;
  $scope.displayMode = _.isUndefined(localStorage.displayMode) ? 'list' : localStorage.displayMode;
  // $scope.search = $state.params.search ? $state.params.search : '';
  $scope.setSearch = function (search) { $scope.search = search };
  $scope.searchOpened = false;
  $scope.searchDropdownAnchor = angular.element(document.querySelector('.search-dropdown-anchor'));
  $scope.paginationShown = true;
  $scope.advsearch = {};



  // Retrieve statistics
  $scope.stats = [];
  $scope.loadStatistics = function() {
    Restangular.one('auditlog')
        .get()
        .then(function (audit_data) {
          $scope.logs = audit_data.logs;
          $scope.logs.forEach((log, index) => {
            Restangular.one('document/' + log.target).get().then(function (doc_data) {
              // console.log(doc_data);
              $scope.stats.push({gpa: doc_data.GPA, gre: doc_data.GRE, score: doc_data.score});
            })
          });
        });
  };
  $scope.loadStatistics();

  // aggregate statistics
  // $scope.GPAcount = { '0 - 1.99': 0,'2.0 - 2.49': 0,'2.50 - 2.99': 0,'3.0 - 3.49': 0,'3.5 - 3.99': 0,'4.0 +': 0 };
  $scope.GPAcount = [
    { key: '0 - 1.99', count:0 },
    { key: '2.0 - 2.49', count: 0 },
    { key: '2.50 - 2.99', count: 0},
    { key: '3.0 - 3.49', count: 0 },
    { key: '3.5 - 3.99', count: 0 },
    { key: '4.0 +', count: 0 }
  ];
  $scope.GREcount = [
    { key: '260 - 280', count: 0 },
    { key: '281 - 300', count: 0 },
    { key: '301 - 320', count: 0 },
    { key: '321 - 340', count: 0 },
  ];

  $scope.aggregateStatistics = function() { 
    $scope.stats.forEach((stat, index) => {
      $scope.GPAcount.count += 1;
      $scope.GREcount.count += 1;
    });
    console.log($scope.GPAcount);
    console.log($scope.GREcount);
  };
  $scope.aggregateStatistics();

});