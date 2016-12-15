(() => {

  'use strict';

  angular
    .module('services')
    .factory('loginFactory', loginFactory);

  loginFactory.$inject = ['$http'];

  function loginFactory($http) {

    activate();

    return {
      login: login
    }

    //////////////////////////////////////////////////

    function activate() {}

    function login(body) {
      return $http.post('/api/login', body).then((response) => {
        return response.data;
      });
    }


  }

})();
