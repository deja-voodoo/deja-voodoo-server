(function() {
   'use strict'
   angular
     .module('app')
     .component('result',{
       controller: controller,
       templateUrl: '/result/result.template.html'
     })
     controller.$inject = ['$http']
     function controller($http) {
       const vm = this;
       vm.$onInit = function() {
         $http.get('/meme').then((response)=>{
           vm.meme = response.data[2]
         })
         vm.name1 = 'Cj'
         vm.name2 = 'Berto'
         vm.noun1 = 'Voodoo Doll'
         vm.noun2 = 'School'
         vm.noun3 = 'Witch Doctor'
         vm.noun4 = 'Doll'
         vm.noun5 = 'Vest'
         vm.noun6= 'Club'
         vm.verb1 = 'Run'
         vm.verb2 = 'Stab'
         vm.verb3 = 'Cry'
         vm.adj1 = 'Awesome'
         vm.adj2 = 'Sad'
         vm.adj3 = 'Mean'
       }
    }
 }());
