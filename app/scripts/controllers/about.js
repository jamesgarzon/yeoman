'use strict';

/**
 * @ngdoc function
 * @name integracionAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the integracionAngularApp
 */
angular.module('integracionAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
