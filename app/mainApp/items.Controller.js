
(()=> {
    'use strict';
    angular.module('menuApp')
    .controller('itemsMenuController', itemsMenuController)


    itemsMenuController.$inject = ['items']
    function itemsMenuController(items){
        let ctrl = this;

        ctrl.items = items.menu_items;
        ctrl.title = items.category;
    }
})();