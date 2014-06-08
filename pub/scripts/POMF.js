var app = angular.module('POMF', ['ngRoute'])
var template = 'includes/rec.html'

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        controller: 'POMFController',
        templateUrl: template
    })
    .otherwise({ redirectTo: '/' })

    $locationProvider.html5Mode(true)
})

var c = 0

app.controller('POMFController', function ($scope) {
    $scope.inc = template

    $scope.rec = { name: 'rec ' + c++, parts: [] }

    $scope.add = function (rec) {
        rec.parts.push({ name: 'rec ' + c++, parts: [] })
    }

    $scope.del = function (rp, rec) {
        var n = rp.parts.indexOf(rec)
        if (n == -1) return
        rp.parts.splice(n, 1)
    }
})
