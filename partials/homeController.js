'use strict';
 
scotchApp.controller('HomeCntrl', 
    function($scope, $route, $routeParams, $location, myService){
        $scope.homeList = myService.sharedObject.homeList;
        $scope.listClick = myService.sharedObject.listClick;
        
        $scope.viewPhotos = [{
                'name': '',
                'imageSrc': 'thumbnail_temp.svg',
            },{
                'name': '',
                'imageSrc': 'thumbnail_temp.svg',
            },{
                'name': '',
                'imageSrc': 'thumbnail_temp.svg',
            },{
                'name': '',
                'imageSrc': 'thumbnail_temp.svg',
            }
        ];
        
        
});