angular.module('app').factory('DrinkResource', function ($resource) {
    return $resource(apiUrl + '/api/drinks/:drinkId', { drinkId: '@DrinkId' },
        {
            'update': {
                method: 'PUT'
            }
        });
});