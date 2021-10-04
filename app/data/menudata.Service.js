

(()=> {
    'use strict';
    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('basePath', 'https://davids-restaurant.herokuapp.com')




    MenuDataService.$inject = ['$http', 'basePath']
    function MenuDataService($http, basePath){
        let service = this;

        service.getAllCategories = function(){
            let promise = $http.get((basePath + '/categories.json'))
            return promise;
        };


        service.getItemsForCategory = function(shortName){
            let promise = $http({
                method: 'GET',
                url: (basePath + '/menu_items.json'),
                params: {
                    category: shortName
                }
            })
            return promise;
        };
    }
})();




// https://davids-restaurant.herokuapp.com/categories.json
// getAllCategories

// https://davids-restaurant.herokuapp.com/menu_items.json?category=
// getItemsForCategory(categoryShortName)
