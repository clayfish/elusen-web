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


app.factory('userService', ['$http', 'helperService',
    function ($http, helperService) {
        var service = this;

        var originalSuccessCallback = function(){};
        var originalErrorCallback = function(){};
        var loginSuccessCallback = function (data, status, headers, config) {
            // TODO Login and keep the cookie
            helperService.setCookie();
            originalSuccessCallback(data, status, headers, config);
        };

        var loginErrorCallback = function (data, status, headers, config) {
            helperService.systemWideMessage = 'Could not log you in';
            helperService.systemWideMessageTheme = 'danger';
            helperService.showSystemWideMessage = true;
            helperService.removeCookie(helperService.AUTHENTICATION_TOKEN_CONST);
            originalErrorCallback(data, status, headers, config);
        };

        service.signIn = function (username, password, successCallback, errorCallback) {
            originalSuccessCallback = successCallback;
            originalErrorCallback = errorCallback;
            if (helperService.config.apiServerEnabled) {
                $http.post(helperService.getApiUrl('authenticate'), {username: username, password: password})
                    .success(loginSuccessCallback).error(loginErrorCallback);
            } else {
                // Can't call API server yet
                loginErrorCallback({}, 404);
            }
        };

        service.signUp = function (username, email, password) {
            // TODO implement
        };

        return service;
    }
]);
