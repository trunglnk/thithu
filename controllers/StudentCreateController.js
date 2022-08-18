window.StudentCreateController = function ($scope, $http, $location, $routeParams){
    var url = 'http://localhost:3000/students'
    $scope.studentName = '';
    $scope.studentEmail ='';
    $scope.studentAvatar = '';
    $scope.studentStatus = '';
    $scope.studentSex =''

    $scope.onChangeImage = function ($event){
        var file = $event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (){
            $scope.studentAvatar = reader.result;
        }
    }


    var id = $routeParams.id;

    if (id) {
        $http.get(`${url}/${id}`).then(
            function (response){
                if(response.status === 200){
                    console.log(response);

                    $scope.studentName = response.data.name;
                    $scope.studentEmail = response.data.email;
                    $scope.studentStatus = response.data.status;
                    $scope.studentAvatar = response.data.avatar;
                    $scope.studentSex = response.data.sex;
                }
            }, function (errors){
                console.log(errors);
            }

        );
    }


    $scope.onSubmit = function (){
        if (id){
            return $http.put(
                `${url}/${id}`,
                {
                    name: $scope.studentName,
                    email: $scope.studentEmail,
                    avatar: $scope.studentAvatar,
                    status: $scope.studentStatus,
                    sex: $scope.studentSex,
                }
            ).then(
                function (response){

                    if(response.status === 200){
                        $location.path('students');
                        alert('Update thành công');
                    }
                },
                function (errors){
                    console.log(errors);
                }
            )
        }

        $http.post(`${url}`, {
            name: $scope.studentName,
            email: $scope.studentEmail,
            avatar: $scope.studentAvatar,
            status: $scope.studentStatus,
            sex: $scope.studentSex,
        }
        ).then(
            function (response) {
                console.log(response);
                if (response.status === 201){
                    $location.path('students');
                    alert('Thêm mới thành công');
                }
            },
            function (errors){
                console.log(errors);
            }
        );
    }
};