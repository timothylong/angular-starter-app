// Create module titled starterApp, add dependencies
var starterApp = angular.module('starterApp', ['ngRoute','ngAnimate','cfp.loadingBar']);

// Disable loading bar spinner
starterApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);

// Route config
starterApp.config(function($routeProvider, $locationProvider) {

    // HTML5 history api
    $locationProvider.html5Mode(true);

    $routeProvider

        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'homeController'
        })

        .when('/:site', {
            templateUrl : 'views/components/work/work.html',
            controller  : 'workController'
        })

        .when('/about', {
            templateUrl : 'views/components/static/static.html',
            controller  : 'aboutController'
        })

        .otherwise({
            redirectTo: '/'
        })

});

starterApp.constant('siteConfig',{
    'work-item-a' : {
        'title' : 'Work Item A',
        'description' : 'Work Item A Description',
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
    'work-item-b' : {
        'title' : 'Work Item B',
        'description' : 'Work Item B Description',
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
    'work-item-c' : {
        'title' : 'Work Item C',
        'description' : 'Work Item C Description',
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

starterApp.controller('homeController', function($scope, cfpLoadingBar) {

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

starterApp.controller('workController', ['$scope','$routeParams', 'siteConfig', 'cfpLoadingBar', function($scope, $routeParams, siteConfig, cfpLoadingBar) {

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

starterApp.controller('aboutController', function($scope, cfpLoadingBar) {

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

// View Loading Directive

// starterApp.directive("routeLoader", function($rootScope, $timeout) {
//     return {
//         template : "<div class='loader' ng-if='isRouteLoading'><img src='assets/images/icon.svg'>",
//         replace: "true",
//         link: function(scope, elem, attrs) {
//             scope.isRouteLoading = false;
//             $rootScope.$on('$routeChangeStart', function(){
//                 scope.isRouteLoading = true;
//             });
//             $rootScope.$on('$routeChangeSuccess', function(){
//                     scope.isRouteLoading = false;
//             });
//         }
//     }
// });

starterApp.run(function() {

    // Additional DOM-level scripts (jQuery, etc...)

});
