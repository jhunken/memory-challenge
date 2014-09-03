'use strict';

/**
 * @ngdoc function
 * @name memoryChallengeApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the memoryChallengeApp
 */
angular.module('memoryChallengeApp')
  .controller('GameCtrl', function ($scope, Cards, $modal, $location, $timeout) {
    var modal;
    $scope.numberPerRow = 5;
    $scope.startDuration = 5;


    $scope.getNumberPerRow = function (num) {
      return new Array(num);
    };


    $scope.checkCard = function (card, selectedIdx) {
      if ($scope.gameIsReady) {
        if (card.target) {
          // remove selected choice from answers array
          var idxToRemove = $scope.answers.indexOf(selectedIdx);
          $scope.answers.splice(idxToRemove,1);
          card.correctChoice = true;
          if($scope.answers.length === 0) {
            modal = $modal.open({
              templateUrl: '/views/winModal.html',
              scope: $scope
            });
          }
        } else {
          modal = $modal.open({
            templateUrl: '/views/failModal.html',
            scope: $scope
          });
        }
      }
    }

    $scope.playAgain = function () {
      modal.close();
      $scope.cards.length = 0;
      $timeout(function () {
        $scope.startGame();
      }, 2000);

    };

    $scope.endGame = function () {
      modal.close();
      $location.path('/');
    };


    $scope.startGame = function () {
      $scope.gameIsReady = false;

      $timeout(function () {
        // Don't let players cheat and click squares until game starts
        $scope.gameIsReady = true;
      }, $scope.startDuration * 1000);

      // generate 25 cards with 35% of them being targets
      $scope.cards = Cards.generateCards(25, .35);
      $scope.answers = Cards.getAnswers();
    };


    // Init
    $scope.startGame();


  });
