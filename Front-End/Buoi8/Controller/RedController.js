function redController($scope, $http , $routeParams) {
    $scope.message = "Red1"+ $routeParams.name;
}