'use strict';

/* App Module */

var scotchApp = angular.module('scotchApp', [
  'ngRoute',
  'ngResource'
]);

scotchApp.config(['$routeProvider',
    function($routeProvider){
      //forDevPurposes
      //$("#navBar").removeClass("navDisplayNone");
      $routeProvider.
      //login
      when('/login', {
        templateUrl: 'partials/Login.html',
        controller: 'LoginCntrl'
      }).
      //forgot password
      when('/forgot', {
        templateUrl: 'partials/forgotPassword.html',
        controller: 'forgotPwCntrl'
      }).
      //register
      when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'registerCntrl'
      }).
      //home
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCntrl'
      }).
      //your scotch
      when('/myScotches', {
        templateUrl: 'partials/scotch.html',
        controller: 'yourScotchCntrl'
      }).
      //checkIn
      when('/checkIn', {
        templateUrl: 'partials/checkIn.html',
        controller: 'checkInCntrl'
      }).
      //search
      when('/search', {
        templateUrl: 'partials/search.html',
        controller: 'SearchCntrl'
      }).
      //settings
      when('/settings', {
        templateUrl: 'partials/settings.html',
        controller: 'settingsCntrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
}]);