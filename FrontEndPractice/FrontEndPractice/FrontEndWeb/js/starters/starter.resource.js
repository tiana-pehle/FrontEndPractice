angular.module('app').factory('StarterResource', function ($resource) {
    return $resource(apiUrl + '/api/starters/:starterId', { starterId: '@StarterId' },
        {
            'update': {
                method: 'PUT'
            }
        });
});