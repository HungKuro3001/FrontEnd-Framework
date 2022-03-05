const myHistory=function($scope,$http){
    var sv =localStorage.getItem("id");
    console.log(sv)
    $scope.Histories=[];
    $scope.myHistory=
        {
            mon:"",
            diem:"",
            thoigian:""
        }
    ;
  const api="https://620f09caec8b2ee283319ac1.mockapi.io/api/PH17124/history";

  $http.get(api).then(function(response){
    $scope.Histories =response.data; 
    console.log($scope.Histories);
    for (let index = 0; index < $scope.Histories.length; index++) {
        if ( $scope.Histories[index].account==sv) {
            $scope.myHistory[index]= $scope.Histories[index]
            console.log($scope.myHistory[index])
        }
    }
    // console.log($scope.myHistory)
})


}