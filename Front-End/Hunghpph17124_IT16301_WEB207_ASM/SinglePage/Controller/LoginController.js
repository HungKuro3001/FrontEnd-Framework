function loginController($scope,$rootScope,$http,$routeParams,$location) {
  $scope.accounts = [];
      $scope.account = {
        id: '',
        name: '',
        email: '',
        role: '',
        password: ''
      };
  $scope.idHide = -1;
  const api = 'https://620f09caec8b2ee283319ac1.mockapi.io/api/PH17124/Hung';
  $http.get(api).then(function (res) {
      $scope.accounts = res.data;
      console.log(res);

     
    })
    .catch(function (err) {
      console.log(err);
      
    });
    $scope.onSubmitForm = function (e) {
      e.preventDefault();
      const email = $scope.email1;
      const pass = $scope.pass1;
      
      
      const account = $scope.accounts.find(function (account) {
          
          return account.email === email && account.password === pass;
      });
      if (account) {
        localStorage.setItem('id', account.id);
        idHide=1;
        console.log(account.id);

        if (account.role == false) {
          alert('Login success');
          $location.path('/trangchu');
          
        } else {
          alert('Login success');
          window.location.href = '/front-End/Hunghpph17124_IT16301_WEB207_ASM/SinglePage/IndexAdmin.html';
        }
      }else {
        alert('Login fail');
      }
    }
    // create function registration with  api
    $scope.onSubmitFormResgistration = function (e) { //
      e.preventDefault();
      const name = $scope.name;
      const email = $scope.email2;
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
        $location.path('/trangchu');
      }
      )
      .catch(function (err) {
        console.log(err);
      }
      );
    }
}
