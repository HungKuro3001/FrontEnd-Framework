function updateAccount($scope, $http, $location, $routeParams) {
    $scope.accounts = [];
    $scope.account = {
        id: '',
        name: '',
        email: '',
        role: '',
        password: ''
      };
      $http.get(api).then(function (res) {
        $scope.accounts = res.data;
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });
    $scope.onSubmitForm.onload = function (e) {
        e.preventDefault(); // prevent reload page
        $scope.accounts[$scope.index]= $scope.account;
        const putApi= api+"/"+$scope.accounts[$scope.index].id;
        console.log(putApi);
        $http.put(putApi,$scope.accounts[$scope.index]).then(function(response){
            console.log(response);
        })
    }
}