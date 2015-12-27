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


app.controller('defaultCtrl', ['$scope', '$timeout', '$interval', 'helperService',
    function ($scope, $timeout, $interval, helperService) {
        $scope.message = '';
        $interval(function() {
            $scope.message = helperService.systemWideMessage;
            $scope.messageTheme = helperService.systemWideMessageTheme;
            $scope.showMessage = helperService.showSystemWideMessage;

            if ($scope.showMessage) {
                $timeout(function () {
                    helperService.showSystemWideMessage = false;
                }, 3000)
            }
        }, 1000);
    }
]);

