angular.module('app').factory('RamenResource', function ($resource) {
    return $resource('/api/ramens/:ramenId', {ramenId: '@RamenId'},
        {
            'update': {
                method: 'PUT'
            }
        })
});