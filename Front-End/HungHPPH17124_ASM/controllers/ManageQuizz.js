const cauhoi=function($scope,$http){
    const api="https://620f09caec8b2ee283319ac1.mockapi.io/api/PH17124/Quiz";
    $scope.answers = [];
    $http.get(api).then(function(response){
       $scope.answers =response.data; 
   })
   $scope.cancel=function(){
      if($scope.index == -1){
          $scope.clear();
      }else{
          $scope.answer=  angular.copy($scope.answers[$scope.index]);
          $scope.answer.Answers[0] =  JSON.stringify($scope.answers[index].Answers[0])+"";
          $scope.answer.Answers[1] =  JSON.stringify($scope.answers[index].Answers[1])+"";
          $scope.answer.Answers[2] =  JSON.stringify($scope.answers[index].Answers[2])+"";
          $scope.answer.Answers[3] =  JSON.stringify($scope.answers[index].Answers[3])+"";
      }
  }
  $scope.clear=function(){
      $scope.answer={};
      $scope.index=-1
  }
  $scope.insert=function(){
    $scope.answer.Answers[0]= JSON.parse($scope.answer.Answers[0])
    $scope.answer.Answers[1]=  JSON.parse($scope.answer.Answers[1])
    $scope.answer.Answers[2] =JSON.parse($scope.answer.Answers[2])
    $scope.answer.Answers[3] =JSON.parse($scope.answer.Answers[3])
      $http.post(api,$scope.answer).then(function(response){
          console. log(response.data);
          const sv =response.data; 
          $scope.answers.push(sv);
          alert("Thêm thành công")
      })
      $scope.clear();
  }
  $scope.delete=function(index,id){
      const deleteApi= api+"/"+id;
      $http.delete(deleteApi).then(function(response){
          console. log(response);
          $scope.answers.splice(index,1);
          alert("Xóa thành công")
      })
     
      $scope.clear();
  }
  $scope.edit=function(index){
   $scope.index=index;
   $scope.answer=angular.copy($scope.answers[index]);
   console.log($scope.answers[index]);
   $scope.answer.Answers[0] =  JSON.stringify($scope.answers[index].Answers[0])+"";
   $scope.answer.Answers[1] =  JSON.stringify($scope.answers[index].Answers[1])+"";
   $scope.answer.Answers[2] =  JSON.stringify($scope.answers[index].Answers[2])+"";
   $scope.answer.Answers[3] =  JSON.stringify($scope.answers[index].Answers[3])+"";
  }
  $scope.save=function(){
    $scope.answer.Answers[0]= JSON.parse($scope.answer.Answers[0])
    $scope.answer.Answers[1]=  JSON.parse($scope.answer.Answers[1])
    $scope.answer.Answers[2] =JSON.parse($scope.answer.Answers[2])
    $scope.answer.Answers[3] =JSON.parse($scope.answer.Answers[3])
      $scope.answers[$scope.index]= $scope.answer;
      const putApi= api+"/"+$scope.answers[$scope.index].id;
      console.log($scope.answers[$scope.index].id);
      console.log(putApi);
      $http.put(putApi,$scope.answers[$scope.index]).then(function(response){
          console. log(response);
          })
          $scope.clear();
          alert("Sửa thành công")
  }
  $scope.onFormSubmit=function(event){
   event.preventDefault();
  }
}