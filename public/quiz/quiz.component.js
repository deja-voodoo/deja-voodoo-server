(function() {
   'use strict'
   angular
     .module('app')
     .component('quiz',{
       controller: controller,
       templateUrl: '/quiz/quiz.template.html'
     })
     controller.$inject = ['$http']
     function controller($http) {
       const vm = this;
       vm.$onInit = function () {
          $http.get('/noun').then(function(response) {
            vm.nouns = response.data
          })
          $http.get('/verb').then(function(response) {
            vm.verbs = response.data
          })
          $http.get('/adj').then(function(response) {
            vm.adjs = response.data
          })
      }
    }
 }());
