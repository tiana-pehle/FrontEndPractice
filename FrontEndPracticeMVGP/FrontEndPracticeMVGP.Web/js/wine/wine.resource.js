angular.module('app').factory('WineResource', function ($resource) {
    return $resource(apiUrl + '/api/wines/:wineId', { wineId: '@WineId' },
    {
        'update': {
            method: 'PUT'
        }
    });
});