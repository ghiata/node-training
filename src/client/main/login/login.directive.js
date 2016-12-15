(() => {

  'use strict'

  angular
    .module('login')
    .directive('login', login);

  login.$inject = [];

  function login() {
    return {
      restrict: 'E',
      templateUrl: 'main/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    };
  }

})();
