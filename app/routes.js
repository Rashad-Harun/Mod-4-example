
(()=> {
    'use strict';
    angular.module('menuApp')
    .config(configFunc)

    
    configFunc.$inject = ['$urlRouterProvider', '$stateProvider']
    function configFunc($urlRouterProvider, $stateProvider){
        
        $urlRouterProvider.otherwise('/')

        // Home state
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        })

        // Category state
        .state('categories', {
            url: '/categories',
            templateUrl: 'views/categories.html',
            controller: 'categoryMenuController as ctrl',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService){
                    return MenuDataService.getAllCategories()
                        .then(response => {
                            return response.data;
                        });
                }]
            }
        })

        // Items state
        .state('items', {
            url: '/items:id',
            templateUrl: 'views/items.html',
            controller: 'itemsMenuController as ctrl',
            resolve: {
                items: ['MenuDataService' ,'$stateParams', function(MenuDataService, $stateParams){
                    var shortName = $stateParams.id; 
                    return MenuDataService.getItemsForCategory(shortName)
                        .then(response =>{
                            return response.data;
                        })
                }]
            }
        })

        

    }


})();