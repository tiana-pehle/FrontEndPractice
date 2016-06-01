angular.module('app').controller('BeerGridController', function ($scope, BeerResource) {

    function activate() {
        $scope.beers = BeerResource.query();
    }

    activate();

});