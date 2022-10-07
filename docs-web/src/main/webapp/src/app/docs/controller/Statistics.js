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
  $scope.stats = [
    {gpa: 1, gre: 10, score: 100},
    {gpa: 2, gre: 20, score: 200},
    {gpa: 3, gre: 30, score: 300}
  ];
  $scope.loadStatistics = function() {
    Restangular.one('document/list')
        .get()
        .then(function (data) {
          $scope.documents = data.documents;
          $scope.totalDocuments = data.total;
          // console.log("hi");
          // console.log($scope.documents);
          // $scope.documents.forEach((item, index) => {
          //   $scope.statistics.push({gpa: item.GPA, gre: item.GRE, score: item.score});
          // });
        });
  
    
    
  };
  $scope.loadStatistics();

});