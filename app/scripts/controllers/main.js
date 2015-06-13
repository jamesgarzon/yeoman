'use strict';

/**
 * @ngdoc function
 * @name integracionAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the integracionAngularApp
 */
angular.module('integracionAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
