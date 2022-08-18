window.StudentDeleteController = function ($scope, $http,$routeParams,$location) {

    var id = $routeParams.id;
    var url = 'http://localhost:3000/students';
    if(id){

        $http.delete(`${url}/${id}`).then(

            function(response) {


                $scope.students = response.data;
                $location.path('students');
                alert('Xóa thành công!')

            },
            function(errors) {
                console.log(errors);
            }
        )

    }}