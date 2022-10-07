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
              console.log($scope.stats);
            })
          });
        });
  };
  $scope.loadStatistics();

});