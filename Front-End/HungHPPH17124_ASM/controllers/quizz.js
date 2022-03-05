
function quizz($scope, $http, $rootScope) {
    // $rootScope.account.mark = 0;
    $scope.account={}
    $scope.isStart = true;
    const api="https://620f09caec8b2ee283319ac1.mockapi.io/api/PH17124/Hung";
    var acc= localStorage.getItem('id');
    $http.get(api+"/"+acc).then(function(response){
        // console.log(response.data);
        $scope.account=response.data
        // console.log($scope.account)
    })
    console.log($rootScope.subjects)
    $scope.start = function () {
        $scope.isStart = true;
        dongho();
    }
    $scope.account.mark=0;
    $scope.list_question = [];
    var id= localStorage.getItem('id')
    console.log(id)
    const adva="https://620f09caec8b2ee283319ac1.mockapi.io/api/PH17124/Quiz";
    // $http.get("Quizs/"+id+".js").then(function (response)
    $http.get(adva).then(function (response)
     {
        console.log(response.data);
        $scope.list_question = response.data;
    });
    $scope.ketqua = [];
    $scope.batdau = 0;
   
    $scope.nopbai = true
    $scope.chamdiem = function () {
        console.log($scope.ketqua);
        console.log($scope.list_question);
        if($scope.ketqua.length == 0){
            alert("Bạn chưa chọn đáp án");
            return;
        }
        if ($scope.ketqua[$scope.batdau].answer == $scope.list_question[$scope.batdau].AnswerId) {
            $scope.message = "Đúng";
            $scope.thongbao = "success"
            $scope.account.mark++;
            $scope.nopbai=false;

        } else {
            $scope.message = "Sai";
            $scope.thongbao = "danger"
            $scope.nopbai=false;
        }
        // $scope.nopbai=false;
        $scope.ketqua = []
    };
    $scope.Next = function () {
        if ($scope.batdau < 9) {
            $scope.batdau++;
            $scope.nopbai = true;
            $scope.message = "";
            $scope.thongbao = ""
            
        }
    }
    var thoiluong = 600;
    function dongho() {
        thoiluong--;
        var phut = Math.floor(thoiluong / 60);
        var giay = thoiluong % 60;
        document.getElementById('sophut').innerHTML = '0'+ phut;
        document.getElementById('sogiay').innerHTML = giay;
        if(thoiluong > 0)
       mytime =  setTimeout(dongho, 1000);
    }
    dongho();
    $scope.xacnhan = function(){
        $("#exampleModal").modal('hide');
        window.location.href = "index.html";
        clearTimeout(mytime)
    }
    $scope.history={
        thoigian:"",
        mon:"",
        diem:"",
        account:""
    }
    $scope.sos = [1,2,3,4,5,6,7,8,9,10];
    $scope.xacnhan=function(){
       var thoigian2 = document.getElementById('sophut').innerHTML + "phut"+":"+ document.getElementById('sogiay').innerHTML+" giay";
       var mon= localStorage.getItem("id")
       var sv= localStorage.getItem("id")
       $scope.history.thoigian=thoigian2;
       $scope.history.mon=mon;
       $scope.history.diem=$scope.account.mark+"";
       $scope.history.account=sv;
       console.log($scope.history)
       const apiHistory="https://620f09caec8b2ee283319ac1.mockapi.io/api/PH17124/history";
       $http.post(apiHistory,$scope.history).then(function(response){
        alert("Điểm của bạn: "+$scope.history.diem+"   Thời gian còn lại: "+$scope.history.thoigian)
        
    }
       )
    }
       
    $scope.cau = function(so){
      
        console.log($scope.ketqua);
        console.log($scope.list_question);
        if($scope.ketqua.length == 0){
            alert("Bạn chưa chọn đáp án");
            return;
        }
        if ($scope.ketqua[$scope.batdau].answer == $scope.list_question[$scope.batdau].AnswerId) {
            $scope.message = "Đúng";
            $scope.thongbao = "success"
            $scope.account.mark++;

        } else {
            $scope.message = "Sai";
            $scope.thongbao = "danger"
        }
        $scope.nopbai = false;
        $scope.batdau = so - 1;
    }

}
