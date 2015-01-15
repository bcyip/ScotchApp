'use strict';

scotchApp.controller('yourScotchCntrl', function ($scope, $route, $routeParams, $location, myService, multiFilterFilter) {
    $scope.homeList = myService.sharedObject.homeList;
    $scope.listClick = myService.sharedObject.listClick;
/*
 *  begin search page logic
 */
//list of your scotches
    $scope.favoriteScotches = [{
            'name' : "Ardbeg",
            'classification' : "Uigeadail",
            'region' : "Islay",
            'subRegion' : "South Shore",
            'nose' : "",
            'taste' : "",
            'finish' : "",
            'image' : "",
            'favorite' : 1,
            'cabinet' : 0,
            'wish' : 1,
        },{
            'name' : "Lagavulin",
            'classification' : "16yr",
            'region' : "Islay",
            'subRegion' : "",
            'nose' : "",
            'taste' : "",
            'finish' : "",
            'image' : "",
            'favorite' : 1,
            'cabinet' : 1,
            'wish' : 1,
        },{
            'name' : "Glenmorangie",
            'classification' : "the Original",
            'region' : "Highland",
            'subRegion' : "",
            'nose' : "",
            'taste' : "",
            'finish' : "",
            'image' : "",
            'favorite' : 1,
            'cabinet' : 1,
            'wish' : 0,
    }];
//hold scotch details that was clicked on   
    $scope.modelDetails = {
      'name' : "",
      'classification' : "",
      'region' : "",
      'subRegion' : "",
      'nose' : "",
      'taste' : "",
      'finish' : "",
      'image' : ""
    };
    
//logic add list logic
//var wordMatch = new RegExp("^.*"+searchText+".*$");
  $scope.filterType = function(type){
    switch (type) {
        case 'all':
            $("#allType").siblings().removeClass("filterType");
            $("#allType").addClass("filterType");
            myService.sharedObject.searchType = "all";
            multiFilterFilter($scope.favoriteScotches);
            break;
        case 'fav':
            $("#favType").siblings().removeClass("filterType");
            $("#favType").addClass("filterType");
            myService.sharedObject.searchType = "fav";
            $scope.searchText="";
            multiFilterFilter($scope.favoriteScotches);
            break;
        case 'cab':
            $("#cabType").siblings().removeClass("filterType");
            $("#cabType").addClass("filterType");
            myService.sharedObject.searchType = "cab";
            $scope.searchText="";
            multiFilterFilter($scope.favoriteScotches);
            break;
        case 'wish':
            $("#wishType").siblings().removeClass("filterType");
            $("#wishType").addClass("filterType");
            myService.sharedObject.searchType = "wish";
            $scope.searchText="";
            multiFilterFilter($scope.favoriteScotches);
            break;
    };
  };

});
