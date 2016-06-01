angular.module('app').controller('RamenGridController', function ($scope, RamenResource) {

    function activate() {
        $scope.ramens = RamenResource.query();

    }

    activate();

});