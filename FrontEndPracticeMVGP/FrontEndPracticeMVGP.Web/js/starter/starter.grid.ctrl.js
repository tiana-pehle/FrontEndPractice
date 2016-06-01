angular.module('app').controller('StarterGridDetail', function ($scope, StarterResource) {

	function activate() {
		$scope.starters = StarterResource.query();
	}

	activate();

});