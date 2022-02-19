const app = angular.module('myApp', []);
    app.controller('myCtrl1', function ($scope,$http) {
      $scope.accounts = [];
      $scope.account = {
        id: '',
        name: '',
        email: '',
        birthday: '',
        password: ''
      };
      var id ;
      const api = 'https://620f09caec8b2ee283319ac1.mockapi.io/api/PH17124/Hung';
      $http.get(api).then(function (res) {
          $scope.accounts = res.data;
          console.log(res);
         
        })
        .catch(function (err) {
          console.log(err);
          
        });
        
        
      // create function login with api
      $scope.onSubmitForm = function (e) {
        e.preventDefault();
        const email = $scope.email1;
        const pass = $scope.pass1;
        
        const account = $scope.accounts.find(function (account) {
            id=account.id;
            console.log(id);
            return account.email === email && account.password === pass;
        
        
        });
        if (account) {
          alert('Login success');
          window.location.href = './TrangChu2.html';
        } else {
          alert('Login fail');
        }
      }
      //create function registration with  api
      $scope.onSubmitFormResgistration = function (e) { //
        e.preventDefault();
        const name = $scope.name;
        const email = $scope.email2;
        const birthday = $scope.birthday;
        const password = $scope.password;
        const passwordConfirm = $scope.passwordConfirm;
        if (password !== passwordConfirm) {
          alert('Password not match');
          return;
        }
        const account = {
          id: '',
          name: name,
          email: email,
          birthday: birthday,
          password: password
        };
        $http.post(api, account).then(function (res) {
          $scope.accounts.push(account);
          alert('Register success');
          window.location.href = './TrangChu2.html';
        })
          .catch(function (err) {
            console.log(err);
          });
      }
      
      // create function change password with api
        
    });
    