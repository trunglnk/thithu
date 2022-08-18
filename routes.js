var app = angular.module('app-route', ['ngRoute']);
app.config(function ($routeProvider){
    $routeProvider.when('/',{
        templateUrl: './pages/home.html',
        controller: StudentController
    }).when('/students',{
        templateUrl: './pages/list.html',
        controller: StudentController
    }).when('/students/add',{
        templateUrl: './pages/students-create.html',
        controller: StudentCreateController
    }).when('/students/edit/:id',{
        templateUrl: './pages/students-create.html',
        controller: StudentCreateController
    }).when('/students/delete/:id',{
        templateUrl: './pages/list.html',
        controller: StudentDeleteController
    })

})