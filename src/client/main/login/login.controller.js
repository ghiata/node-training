(() => {

	'use strict'

	angular
		.module('login')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['$http'];

	function LoginController($http) {
		/* jshint validthis: true */
		var vm = this;

		vm.login = login;

		activate();

		//////////////////////////////////////////////////

		function activate() {}

		function login(text) {
			console.log(text);
			$http.post('/api/login', text).then((response) => {
				console.log(response);
			});
		}

	}

})();
