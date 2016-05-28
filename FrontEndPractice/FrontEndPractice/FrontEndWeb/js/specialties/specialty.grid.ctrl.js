angular.module('app').factory('SpecialtyResource', function ($resource) {
    return $resource('/api/specialties/:specialtyId', { specialtyId: '@SpecialtyId' },
        {
            'update': {
                method: 'PUT'
            }
        });
});