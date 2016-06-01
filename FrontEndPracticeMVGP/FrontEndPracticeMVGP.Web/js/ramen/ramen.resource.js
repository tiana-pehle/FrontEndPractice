angular.module('app').factory(RamenResource, function ($resource) {
    return $resource(apiUrl + '/api/ramens/:ramensId', { ramenId: '@RamenId' },
        {
            'update': {
                method: 'PUT'
            }
        });
});