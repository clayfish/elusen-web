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

app.factory('helperService', ['$cookies', '$location', function ($cookies, $location) {
    var service = this;

    service.AUTHENTICATION_TOKEN_CONST = 'authentication-token-elusen';

    // This is to enable system-wide alert messages
    // Theme is one of the Bootstrap themes: success, info, warning, danger. Default is "info"
    service.systemWideMessage = '';
    service.systemWideMessageTheme = 'info';
    service.showSystemWideMessage = false;

    // TODO create a configuration page in the web UI to set these variables
    service.config = {
        baseUrl: 'https://clay.fish/elusen/api/',
        apiVersion: 1,
        apiServerEnabled: false
    };

    // It acts like cookie wrapper and provides 3 methods to operate on cookies
    service.getCookie = function (key) {
        return $cookies.get(key);
    };

    service.setCookie = function (key, value, options) {
        $cookies.put(key, value, options);
    };

    service.removeCookie = function (key) {
        return $cookies.remove(key);
    };

    service.isLoggedIn = function () {
        // Using double NOTs for returning only boolean
        return !(!service.getCookie(service.AUTHENTICATION_TOKEN_CONST));
    };

    service.go = function (uri) {
        if(uri.indexOf('http') == 0) {

        } else if(uri.indexOf('/') == 0) {
            $location.path(uri);
        } else {
            $location.path('/'+uri);
        }
    };

    service.getApiUrl = function (uri) {
        if (uri.indexOf('/') != 0) {
            uri = '/' + uri;
        }
        return service.config.baseUrl + service.config.apiVersion + uri;
    };

    return service;
}]);
