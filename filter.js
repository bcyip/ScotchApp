
scotchApp.filter('multiFilter', function(myService) {
  return function(item,searchText) {
    var searchType = myService.sharedObject.searchType;
    var filteredList = [];
        switch(searchType){
            case 'cab' :
                if (searchText) 
                    break;
                else{
                    for (var i=0 ; i<item.length ; i++){
                        if (item[i].cabinet === 1) {
                            filteredList.push(item[i]);
                        }
                    }
                    return filteredList;
                }
                break;
            
            case 'fav' :
                if (searchText)
                    break;
                else{
                    for (var i=0 ; i<item.length ; i++){
                        if (item[i].favorite === 1) {
                            filteredList.push(item[i]);
                        }
                    }
                    return filteredList;
                }
                break;
            case 'wish' :
                if (searchText) 
                    break;
                else{
                    for (var i=0 ; i<item.length ; i++){
                        if (item[i].wish == 1) {
                            filteredList.push(item[i]);
                        }
                    }
                    return filteredList;
                }
                break;
        }
        if (searchText) {
            $("#allType").siblings().removeClass("filterType");
            $("#allType").addClass("filterType");
            for(var i=0; i<item.length; i++){
                var searchTerm = searchText.toLowerCase();
                var name = item[i].name.toLowerCase();
                var classif = item[i].classification.toLowerCase();
                if ( name.indexOf(searchText) != -1 || classif.indexOf(searchText) != -1 ) 
                    filteredList.push(item[i]);
            }
            return filteredList;
        }
        return item;
  };
});