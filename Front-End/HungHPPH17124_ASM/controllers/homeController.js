// const app= angular.module("my_Course",[]);
// const course=function($scope,$http,$rootScope){
//     const api="https://620b0628beee430017f38485.mockapi.io/course";
//      $scope.courses = [];
//      $scope.pageCount=0;
//      var soTrang=0;
//      $http.get(api).then(function(response){
//         $scope.courses =response.data; 
//         $scope.pageCount=Math.ceil($scope.courses.length/8);
//         soTrang=Math.ceil($scope.courses.length/8)
//         console.log( $scope.courses);
//     })
//     $scope.local=function(id){
//         // console.log(id)
//         localStorage.setItem("id" ,id)
//         // localStorage.removeItem("id" ,id)
//         var acc= localStorage.getItem('student');
//         if (acc=="null") {
//             alert("Đăng nhập để làm bài");
//             window.location.href="./index.html"   
//         }else{
//             window.location.href="./KtraTN.html"   
//         }
//     }
//     $scope.begin=0;


//     // console.log(soTrang)
//     // console.log($scope.pageCount)
//     $scope.First = function(){
//         $scope.begin=0;
//         console.log($scope.begin)
//         console.log(soTrang)
//     }
//     $scope.Pre=function(){
//         if ( $scope.begin>0) {
//             $scope.begin-=8;
//             console.log($scope.begin)
//         }
//     }
//     $scope.Next=function(){
//         if ( $scope.begin<($scope.pageCount-1)*8) {
//             $scope.begin+=8;
//             console.log($scope.begin)
//         }
//     }
//     $scope.Last = function(){
//         $scope.begin=($scope.pageCount-1)*8;
//         console.log($scope.begin)
//     }

// }
function Home($scope, $http, $rootScope) {
    const api = "https://620f09caec8b2ee283319ac1.mockapi.io/api/PH17124/Course";
    $scope.courses = [];
    $scope.pageCount = 0;
    var pageNumber = 0;
    $http.get(api).then(function (res) {
        $scope.courses = res.data;
        $scope.pageCount = Math.ceil($scope.courses.length / 6);
        pageNumber = Math.ceil($scope.courses.length / 6);
        console.log($scope.courses);
    })
    $scope.begin = 0;


    // console.log(soTrang)
    // console.log($scope.pageCount)
    $scope.First = function () {
        $scope.begin = 0;
        console.log($scope.begin)
        console.log(soTrang)
    }
    $scope.Pre = function () {
        if ($scope.begin > 0) {
            $scope.begin -= 6;
            console.log($scope.begin)
        }
    }
    $scope.Next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 6) {
            $scope.begin += 6;
            console.log($scope.begin)
        }
    }
    $scope.Last = function () {
        $scope.begin = ($scope.pageCount - 1) * 6;
        console.log($scope.begin)
    }

}