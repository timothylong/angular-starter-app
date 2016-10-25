// Route config
dsgApp.config(function($routeProvider, $locationProvider) {
    
    // HTML5 history api
    $locationProvider.html5Mode(true);

    $routeProvider

        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'projectController'
        })

        .when('/sample-static-page', {
            templateUrl : 'components/static/static.html',
            controller  : 'staticController'
        })

        .when('/:site', {
            templateUrl : 'components/dynamic/dynamic.html',
            controller  : 'dynamicController'
        })

        .otherwise({
            redirectTo: '/'
        })

});