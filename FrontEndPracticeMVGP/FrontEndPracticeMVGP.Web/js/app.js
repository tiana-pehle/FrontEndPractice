angular.module('app', ['ngResource', 'ui.router']);

angular.module('app').value('apiUrl', 'http://localhost:57099/')

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', { url: '/home', templateUrl: '/templates/home/home.html', controller: 'HomeController' })
                    
        .state('beer', { url: '/beer', abstract: true, template: '<ui-view/>' })
                       .state('beer.grid', { url: '/grid', templateUrl: '/templates/beer/beer.grid.html', controller: 'BeerGridController' })
                       .state('beer.detail', {url: '/detail', templateUrl: '/templates/beer/beer.detail.html', controller: 'BeerDetailController' })                
      
            .state('drink', {url: '/drink', abstract: true, template: '<ui-view/>'})
                            .state('drink.grid', { url: '/grid/', templateUrl: '/templates/drink/drink.grid.html', controller: 'DrinkGridController' })
                            .state('drink.detail', { url: '/detail', templateUrl: '/templates/drink/drink.detail.html', controller: 'DrinkDetailController' })
                .state('ramen', { url: '/ramen', abstract: true, template: '<ui-view/>' })
                                .state('ramen.grid', { url: '/grid/', templateUrl: '/templates/ramen/ramen.grid.html', controller: 'RamenGridController' })
                                .state('ramen.detail', { url: '/detail', templateUrl: '/templates/ramen/ramen.detail.html', controller: 'RamenDetailController' })
                   .state('specialty', { url: '/specialty', abstract: true, template: '<ui-view/>' })
                               .state('specialty.grid', { url: '/grid/', templateUrl: '/templates/specialty/specialty.grid.html', controller: 'SpecialtyGridController' })
                               .state('specialty.detail', { url: '/detail', templateUrl: '/templates/specialty/specialty.detail.html', controller: 'SpecialtyDetailController' })
                      .state('starter', { url: '/starter', abstract: true, template: '<ui-view/>' })
                              .state('starter.grid', { url: '/grid/', templateUrl: '/templates/starter/starter.grid.html', controller: 'StarterGridController' })
                              .state('starter.detail', { url: '/detail', templateUrl: '/templates/starter/starter.detail.html', controller: 'StarterDetailController' })
                         .state('wine', { url: '/wine', abstract: true, template: '<ui-view/>' })
                                 .state('wine.grid', { url: '/grid/', templateUrl: '/templates/wine/wine.grid.html', controller: 'WineGridController' })
                                 .state('wine.detail', { url: '/detail', templateUrl: '/templates/wine/wine.detail.html', controller: 'WineDetailController' })



    ;

});