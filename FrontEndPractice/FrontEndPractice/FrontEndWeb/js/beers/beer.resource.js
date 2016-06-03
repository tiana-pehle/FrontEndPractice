angular.module('app').factory('BeerResource', function ($resource) {
    return $resource(apiUrl + '/api/beers/:beerId', { beerId: '@BeerId' },
        {
            'update': {
                method: 'PUT'
            }
        });
});