angular.module('app').controller('WineGridDetail', function ($scope, WineResource) {

    function activate() {
        $scope.wines = WineResource.query();

    }

    activate();

});