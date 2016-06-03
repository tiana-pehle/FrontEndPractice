angular.module('app').factory('DrinkResource', function ($resource) {
    return $resource(apiUrl + '/api/drinks/:DrinkId', {drinkId: '@DrinkId'},
    {
        'update': {
            method: 'PUT'
        }
    });
});