angular.module('app').factory('DrinkResource', function ($resource) {
    return $resource('/api/drinks/:DrinkId', {drinkId: '@DrinkId'},
    {
        'updte': {
            method: 'PUT'
        }
    });
});