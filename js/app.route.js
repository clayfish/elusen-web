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


app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/homepage.html',
                controller: 'homepageCtrl'
            })
            //.when('/phones/:phoneId', {
            //    templateUrl: 'partials/phone-detail.html',
            //    controller: 'PhoneDetailCtrl'
            //})
            .when('/calculators', {
                templateUrl: 'views/calculators/calculators.html',
                controller: 'calculatorListCtrl'
            })
            .when('/calculators/gdm', {
                templateUrl: 'views/calculators/gdm.html',
                controller: 'gdmCalculatorCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);
