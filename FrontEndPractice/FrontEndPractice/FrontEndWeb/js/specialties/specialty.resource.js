angular.module('app').controller('SpecialtyDetailController', function ($scope) {
    return $resource(apiUrl + '/api/specialties/:specialtyId', { specialtyId: '@SpecialtyId' },
    {
        'update': {
            method: 'PUT'
        }
    });
});