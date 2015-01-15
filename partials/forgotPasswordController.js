'use strict';

scotchApp.controller('forgotPwCntrl', function ($scope, $route, $routeParams, $location, myService, multiFilterFilter) {
  $scope.homeList = myService.sharedObject.homeList;
  $scope.listClick = myService.sharedObject.listClick;
  $scope.toHome = function(){
    $location.path("/login");
  };
  
});