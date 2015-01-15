scotchApp.factory("myService", function($route, $routeParams, $location){
    return {
        sharedObject: {
            state : "loggedIn",
            searchType: 'all',
            homeList : [{
              'name': 'Home',
                    'image': 'glyphicon glyphicon-chevron-right pull-right',
                    'class' : "list-group-item",
                    'badgeNum': ''
                },{
                    'name': 'My Scotches',
                    'image': 'glyphicon glyphicon-chevron-right pull-right',
                    'class' : "list-group-item active",
                    'badgeNum': ''
                },{
                    'name': 'Check-In',
                    'image': 'glyphicon glyphicon-chevron-right pull-right',
                    'class' : "list-group-item",
                    'badgeNum': ''
                },{
                    'name': 'Search',
                    'image': 'glyphicon glyphicon-chevron-right pull-right',
                    'class' : "list-group-item",
                    'badgeNum': ''
                },{
                    'name': 'Settings',
                    'image': 'glyphicon glyphicon-chevron-right pull-right',
                    'class' : "list-group-item",
                    'badgeNum': ''
            }],
            listClick : function(id, flag){
                if (flag === "home") {
                    id++;
                }
                var classie = window.classie;
                var itemClicked = document.getElementById('navMenu');
                var menuLeft = document.getElementById( 'mainMenuLeft' );
                if (flag) {
                    
                }
                else{
                    classie.toggle( document.body, 'cbp-spmenu-push-toright' );
                    classie.toggle( menuLeft, 'cbp-spmenu-open' );
                }
                switch (id) {
                    case 0: //home
                        $location.path("/home");
                        break;
                    case 1: //my scotches
                        $location.path("/myScotches");
                        break;
                    case 2: //check in
                        $location.path("/checkIn");
                        break;
                    case 3: //search
                        $location.path("/search");
                        break;
                    case 4: //settings
                        $location.path("/settings");
                        break;
                    case 'menu':
                    case 'search':
                        classie.toggle( itemClicked, 'active' );
                        break;
                }
            },
        }
    };
})