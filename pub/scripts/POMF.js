var app = angular.module('POMF', ['ngRoute'])

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        controller: 'POMFController',
        templateUrl: 'includes/basic.html'
    })
    .otherwise({ redirectTo: '/' })

    $locationProvider.html5Mode(true)
})

app.controller('POMFController', function () {})
