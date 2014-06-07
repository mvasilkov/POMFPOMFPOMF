var app = angular.module('POMF', ['ngRoute'])

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        controller: 'POMFController',
        templateUrl: 'includes/rec.html'
    })
    .otherwise({ redirectTo: '/' })

    $locationProvider.html5Mode(true)
})

var c = 0

app.controller('POMFController', function ($scope) {
    $scope.rec = { name: 'rec ' + c++, branches: [] }

    $scope.add = function (rec) {
        rec.branches.push({ name: 'rec ' + c++, branches: [] })
    }

    $scope.del = function (rec) { rec.branches.length = 0 }
})
