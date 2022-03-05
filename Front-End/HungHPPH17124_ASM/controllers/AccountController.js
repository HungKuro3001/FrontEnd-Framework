function ManageAccountController($scope, $rootScope, $http, $routeParams, $location) {
    // Khởi tạo
    $scope.accounts = [];
    $scope.account = {
        id: '',
        name: '',
        email: '',
        role: '',
        password: ''
      };
    $scope.isSuccess = true;
    $scope.message = "";
    $scope.index = -1;

    const api = 'https://620f09caec8b2ee283319ac1.mockapi.io/api/PH17124/Hung';
    // gửi 1 request dạng GET lên API server
    $http.get(api).then(function (res) {
            $scope.accounts = res.data;
            console.log(res);
        })
        .catch(function (err) {
            console.log(err);
        });
    // create function add account with api server
    // $scope.onAddAccount = function (e) {
    //     event.preventDefault();
    //     $http.post(api, $scope.account).then(function (res) {
    //             $scope.accounts.push(res.data);
    //             $scope.isSuccess = true;
    //             $scope.message = "Thêm thành công";
    //         })
    //         .catch(function (err) {
    //             $scope.isSuccess = false;
    //             $scope.message = "Thêm thất bại";
    //         });
    // };

    // // create function update account with api server and date formatter
    // $scope.onUpdateAccount = function (index) {
    //     $scope.account = $scope.accounts[index];

    //     $scope.index = index;
    //     $http.put(api + '/' + $scope.account.id, $scope.account).then(function (res) {
    //             $scope.isSuccess = true;
    //             $scope.message = "Cập nhật thành công";
    //         })
    //         .catch(function (err) {
    //             $scope.isSuccess = false;
    //             $scope.message = "Cập nhật thất bại";
    //         });
    // };

    // // create function delete account with http API
    // $scope.onDeleteAccount = function (index,id) {
    //     $http.delete(api + '/' + id).then(function (res) {
    //             $scope.message = "Xóa thành công";
    //             $scope.isSuccess = true;
    //               // remove account from array
    //             $scope.accounts.splice(index, 1);
    //             $('#modal_delete_' + id).modal('hide');
    //         })
    //         .catch(function (err) {
    //             // console.log(err);
    //             $scope.message = "Xóa thất bại";
    //             $scope.isSuccess = false;
    //         });
    // };
    $scope.cancel=function(){
        if($scope.index == -1){
            $scope.clear();
        }else{
            $scope.account=  angular.copy($scope.accounts[$scope.index]);
        }
    }
    $scope.clear=function(){
        $scope.account={};
        $scope.index=-1
    }
    $scope.insert=function(){
        $http.post(api,$scope.account).then(function(response){
            console. log(response.data);
            const sv =response.data; 
            $scope.accounts.push(sv);
        })
        $scope.clear();
    }
    $scope.delete=function(index,id){
        const deleteApi= api+"/"+id;
        $http.delete(deleteApi).then(function(response){
            console. log(response);
            $scope.accounts.splice(index,1);
        })
       
        $scope.clear();
    }
    $scope.edit=function(index){
     $scope.index=index;
     $scope.account=angular.copy($scope.accounts[index]);
    }
    $scope.save=function(){
        $scope.accounts[$scope.index]= $scope.account;
        const putApi= api+"/"+$scope.accounts[$scope.index].id;
        console.log(putApi);
        $http.put(putApi,$scope.accounts[$scope.index]).then(function(response){
            console. log(response);
            })
    }

};