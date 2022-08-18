window.StudentController = function ($scope, $http){
    $scope.students = [];

    $http.get('http://localhost:3000/students').then(
        function (response){
            if(response.statusText === 'OK'){
                $scope.students = response.data;
            }
        },
        function (errors){
            console.log(errors);
        }
    )
};