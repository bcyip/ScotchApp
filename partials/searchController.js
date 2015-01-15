'use strict';
 
scotchApp.controller('SearchCntrl',
    function($scope, $route, $routeParams, $location, myService){
        $scope.homeList = myService.sharedObject.homeList;
        $scope.listClick = myService.sharedObject.listClick;
    /*
     *  begin search page logic
     */
    //hold all scotches
        $scope.scotchSearchList = [{
              'name' : "Ardbeg",
              'classification' : '10yr',
              'style' : 'Islay',
          },{
              'name' : "Ardbeg",
              'classification' : 'Uggedail',
              'style' : 'Islay',
          },{
              'name' : "Macallen",
              'classification' : '12yr',
              'style' : 'Highland',
        }];
     //hold scotch details that was clicked on   
        $scope.modalDetails = {
          'name' : "",
          'classification' : "",
          'region' : "",
          'subRegion' : "",
          'alcohol' : "",
          'nose' : "",
          'palate' : "",
          'body' : "",
          'finish' : "",
          'image' : ""
        };
     //logic to open modal   
        $scope.modal = function(name, classification){
          //to load scotch modal details
          $('#scotchModal').on('show.bs.modal', function (e) {
            //load scotch modal details
            $scope.modalDetails.name = "Aberfeldy";
            $scope.modalDetails.classification = "18yr Cask strength";
            $scope.modalDetails.region = "Highland";
            $scope.modalDetails.subRegion = "Speyside";
            $scope.modalDetails.alcohol = "40";
            $scope.modalDetails.nose = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
            $scope.modalDetails.palate = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
            $scope.modalDetails.body = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
            $scope.modalDetails.finish = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
            $scope.modalDetails.image = "thumbnail_temp.svg";
          });
          
          var options = {
            backdrop : "false",
            keyboard : "true",
            show : "true",
          };
          $('#scotchModal').modal(options);
          
          $('#myModal').on('show.bs.modal', function () {
              $('.modal .modal-body').css('overflow-y', 'auto');
              /*
              $('.modal .modal-body').css('max-height', $(window).height() * 0.7);
              */
          });
        };
    //logic to go to check-in
        $scope.toCheckIn = function(){
            location.href="checkIn.html";
        }
      //logic add list logic
        $scope.add = function(addType){
            switch (addType) {
                case 'fav':
                    alert('add favorite');
                    break;
                case 'cab':
                    alert('add cabinet');
                    break;
                case 'wish':
                    alert('add wishlist');
                    break;
            };
        };
});
