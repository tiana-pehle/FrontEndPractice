angular.module('app', ['ngResource', 'ui.router']);

angular.module('app').value('apiUrl', 'http://localhost:57099/')

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home', templateUrl: '/templates/home/home.html', controller: 'HomeController'
    });

});