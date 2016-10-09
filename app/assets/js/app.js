// Create module titled dsgApp, add dependencies
var dsgApp = angular.module('dsgApp', ['ngRoute','ngAnimate','cfp.loadingBar']);

// Disable loading bar spinner 
dsgApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);

// Route config
dsgApp.config(function($routeProvider, $locationProvider) {
    
    // HTML5 history api
    $locationProvider.html5Mode(true);

    $routeProvider

        .when('/', {
            templateUrl : 'partials/home.html',
            controller  : 'projectController'
        })

        .when('/sample-static-page', {
            templateUrl : 'partials/static.html',
            controller  : 'staticController'
        })

        .when('/:site', {
            templateUrl : 'partials/dynamic.html',
            controller  : 'dynamicController'
        })

        .otherwise({
            redirectTo: '/'
        })

});

dsgApp.constant('siteConfig',{
    'sample-dynamic-page' : {
        'title' : 'Sample Page',        
        'description' : 'Sample Page Description',
        'colors' : [
            {
                'title' : 'Primary',
                'hex' : '38ABC8',
                'rgb' : '56 171 200'
            },
            {
                'title' : 'Dark Gray',
                'hex' : '34363E',
                'rgb' : '52 54 62'
            },
            {
                'title' : 'Dark Gray (Alternate)',
                'hex' : '464851',
                'rgb' : '70 72 81'
            },
            {
                'title' : 'Mid Gray',
                'hex' : 'A7ADB6',
                'rgb' : '167 173 182'
            },
            {
                'title' : 'Light Gray',
                'hex' : 'E8ECEF',
                'rgb' : '232 236 239'
            }
        ]
    },
    'sample-dynamic-page-b' : {
        'title' : 'Sample Page B',        
        'description' : 'Sample Page B Description',
        'colors' : [
            {
                'title' : 'Primary',
                'hex' : '15859F',
                'rgb' : '21 133 159'
            },
            {
                'title' : 'Dark Gray',
                'hex' : '505050',
                'rgb' : '80 80 80'
            },
            {
                'title' : 'Light Gray (Alternate)',
                'hex' : 'FAFAFA',
                'rgb' : '250 250 250'
            }
        ]
    },
    'sample-dynamic-page-c' : {
        'title' : 'Sample Page C',        
        'description' : 'Sample Page C Description',
        'colors' : [
            {
                'title' : 'Primary',
                'hex' : '01AFFE',
                'rgb' : '1 175 254'
            },
            {
                'title' : 'Dark Gray',
                'hex' : '4D4D4D',
                'rgb' : '77 77 77'
            },
            {
                'title' : 'Light Gray',
                'hex' : 'EEEEEE',
                'rgb' : '238 238 238'
            },
            {
                'title' : 'Light Gray (Alternate)',
                'hex' : 'FAFAFA',
                'rgb' : '250 250 250'
            }
        ]
    },
})

dsgApp.controller('dynamicController', ['$scope','$routeParams', 'siteConfig', 'cfpLoadingBar', function($scope, $routeParams, siteConfig, cfpLoadingBar) {

    console.log($routeParams.site);

    var config = siteConfig[$routeParams.site];

    // Start loader
    $scope.start = function() {
        cfpLoadingBar.start();    
    };
    
    // Complete loader
    $scope.complete = function () {
        cfpLoadingBar.complete();
    };
    
    // Initialize scope
    $scope.start();

    // Complete loader when DOM is ready
    angular.element(document).ready(function () {
        $scope.complete();
    });

    $scope.title = config.title;
    $scope.description = config.description;
    $scope.colors = config.colors;

}]);

dsgApp.controller('staticController', function($scope, cfpLoadingBar) {

    // Start loader
    $scope.start = function() {
        cfpLoadingBar.start();    
    };
    
    // Complete loader
    $scope.complete = function () {
        cfpLoadingBar.complete();
    };
    
    // Initialize scope
    $scope.start();

    // Complete loader when DOM is ready
    angular.element(document).ready(function () {
        $scope.complete();
    });

});

dsgApp.run(function() {

    // Additional DOM-level scripts (jQuery, etc...)

});