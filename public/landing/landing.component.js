(function() {
   'use strict'
   angular
     .module('app')
     .component('homePage',{
       controller: controller,
       templateUrl: '/landing/landing.template.html'
     })
     controller.$inject = ['$http']
     function controller($http) {
    }
 }());
