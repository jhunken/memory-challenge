'use strict';

/**
 * @ngdoc function
 * @name memoryChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memoryChallengeApp
 */
angular.module('memoryChallengeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
