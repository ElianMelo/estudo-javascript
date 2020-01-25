var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./routes/home.html"
    })
    .when("/testa", {
        template : "<h1>Teste A</h1>"
    })
    .when("/testb", {
        template : "<h1>Teste B</h1>" 
    })
    .when("/testc", {
        template : "<h1>Teste C</h1>"
    })
});