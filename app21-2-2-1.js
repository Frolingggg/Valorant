var app = angular.module('booksApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider)
{
    $routeProvider
    .when('/harry1', {
        templateUrl: "index21-2-2.html",
        controller: "book1"
    })
    .when('/harry2', {
        templateUrl: "index21-2-2.html",
        controller: "book2"
    })
    .when('/harry3', {
        templateUrl: "index21-2-2.html",
        controller: "book3"
    })
    .when('/harry4', {
        templateUrl: "index21-2-2.html",
        controller: "book4"
    })
    .when('/harry5', {
        templateUrl: "index21-2-2.html",
        controller: "book5"
    })
});

app.controller("book1", function($scope, $route){
    $scope.books = {
        year: "P2000 | Flashback",
        history: "2,75$",
        place: "8/10",
    
    }
})
app.controller("book2", function($scope, $route){
    $scope.books = {
        year: "Glock-18 | Vogue",
        history: "5,75$",
        place: "10/10",
    
    }
})
app.controller("book3", function($scope, $route){
    $scope.books = {
        year: " M4A4 | NEO-NOIR",
        history: "5,50$",
        place: "10/10",
    
    }
})
app.controller("book4", function($scope, $route){
    $scope.books = {
        year: "AK-47 | The Empresses",
        history: "27$",
        place: "7/10",
       
    }
})
app.controller("book5", function($scope, $route){
    $scope.books = {
        year: "AWP | NEO-NOIR",
        history: "33$",
        place:"10/10",
     
    }
})