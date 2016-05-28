angular.module('app').factory('BeerResource', function ($resource) {
    return $resource('/api/beers/:beerId', { beerId: '@BeerId' },
        {
            'update': {
                method: 'PUT'
            }
        });
});