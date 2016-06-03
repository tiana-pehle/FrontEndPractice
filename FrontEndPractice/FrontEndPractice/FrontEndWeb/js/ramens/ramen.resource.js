angular.module('app').factory('RamenResource', function ($resource) {
    return $resource(apiUrl + '/api/ramens/:ramenId', { ramenId: '@RamenId' },
        {
            'update': {
                method: 'PUT'
            }
        });
});