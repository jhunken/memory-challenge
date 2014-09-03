'use strict';

/**
 * @ngdoc function
 * @name memoryChallengeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the memoryChallengeApp
 */
angular.module('memoryChallengeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
