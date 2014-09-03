'use strict';

/**
 * @ngdoc directive
 * @name memoryChallengeApp.directive:card
 * @description
 * # card
 */
angular.module('memoryChallengeApp')
  .directive('card', function () {
    return {
      template: '<div></div>',
      restrict: 'AE',
      scope: { 'flashDurationSec': '='},
      link: function postLink(scope, element, attrs) {
        element.css('background-color', Please.make_color({
          base_color: 'cyan'
        }));

        window.setTimeout(function() {
          element.removeClass('selected');
        }, scope.flashDurationSec * 1000);
      }
    };
  });
