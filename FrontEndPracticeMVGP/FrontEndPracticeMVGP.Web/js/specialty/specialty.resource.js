angular.module('app').factory('SpecialtyResource', function ($resource) {
    return $resource(apiUrl + '/api/specialties/:specialtyId', { specialtyId: '@SpecialtyId' },
        {
            'update': {
                method: 'PUT'
            }
        });
});