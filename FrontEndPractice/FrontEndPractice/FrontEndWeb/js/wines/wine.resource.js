angular.module('app').factory('WineResource', function ($resource) {
    return $resource('/api/wines/:wineId', { wineId: '@WineId' },
    {
        'update': {
            method: 'PUT'
        }
    });
});