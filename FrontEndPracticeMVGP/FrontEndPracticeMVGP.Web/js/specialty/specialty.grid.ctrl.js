angular.module('app').controller('SpecialtyGridDetail', function ($scope, SpecialtyResource) {

    function activate() {
        $scope.specialties = SpecialtyResource.query();

    }

    activate();

});