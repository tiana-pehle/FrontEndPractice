angular.module('app').controller('DrinkGridController', function ($scope, DrinkResource) {

    function activate() {
        $scope.drinks = DrinkResource.query();
    }

    activate();

});