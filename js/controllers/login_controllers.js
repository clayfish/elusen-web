/*
 Elusen DB Web Interface
 Copyright (C) 2015-16  Ali Al-Ibrahim

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see http://www.gnu.org/licenses/.

 */

app.controller('loginCtrl', ['$scope', 'userService', 'helperService',
    function ($scope, userService, helperService) {
        $scope.password ='';
        $scope.username = '';
        $scope.rememberMe = true;

        $scope.login = function () {
            userService.signIn($scope.username, $scope.password);
            helperService.go('/');
        };

        $scope.resetPassword = function () {

        };
    }
]);


app.controller('signUpCtrl', ['$scope', 'userService', 'helperService',
    function ($scope, userService, helperService) {
        $scope.signUp = userService.signUp;
    }
]);
