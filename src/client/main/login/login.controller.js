(() => {

  'use strict'

  angular
    .module('login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['loginFactory'];

  function LoginController(loginFactory) {
    /* jshint validthis: true */
    var vm = this;

    vm.login = login;

    activate();

    //////////////////////////////////////////////////

    function activate() {}

    function login(text) {
      loginFactory.login(text).then((response) => {
        console.log(response);
      });
    }

  }

})();
