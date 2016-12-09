(() => {
	'use strict';

	angular
		.module('my-app')
		.directive('main', main);

	main.$inject = [];

	function main() {
		return {
			restrict: 'E',
			templateUrl: 'main/main.html' 
		};
	}

})();
