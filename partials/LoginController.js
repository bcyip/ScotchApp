'use strict';

scotchApp.controller('LoginCntrl',function($scope, $route, $routeParams, $location, myService){
    $scope.homeList = myService.sharedObject.homeList;
    $scope.listClick = myService.sharedObject.listClick;    
    $scope.Login = function(){
        $location.path("/home");
    };
    $scope.forgotPW = function(){
        $location.path("/forgot");
    }
    $scope.register = function(){
        $location.path("/register");
    }
});