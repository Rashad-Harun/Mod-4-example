
(()=> {
    'use strict';
    angular.module('menuApp')
    .controller('categoryMenuController', categoryMenuController)

    categoryMenuController.$inject = ['categories']
    function categoryMenuController(categories){
        let ctrl = this;

        ctrl.categories = categories;
    }
})();