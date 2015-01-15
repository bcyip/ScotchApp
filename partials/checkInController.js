'use strict';

scotchApp.controller('checkInCntrl', function ($scope, $route, $routeParams, $location, myService, multiFilterFilter) {
  $scope.homeList = myService.sharedObject.homeList;
  $scope.listClick = myService.sharedObject.listClick;
  
  
});