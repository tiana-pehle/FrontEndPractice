angular.module('app').factory('StarterResource', function ($resource) {
    return $resource('/api/starters/:starterId', { starterId: '@StarterId' },
        {
            'update': {
                method: 'PUT'
            }
        });
});