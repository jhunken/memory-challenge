'use strict';

/**
 * @ngdoc service
 * @name memoryChallengeApp.Cards
 * @description
 * # Cards
 * Service in the memoryChallengeApp.
 */
angular.module('memoryChallengeApp')
  .service('Cards', function Cards() {
    var answers = [];
    function Card() {
      this.target = false;
    }

    /**
     * Generates an array of unique numbers with a length of howMany and numbers <= upperBoundry
     * @param howMany
     * @param upperBoundry
     */
    function getRandomIndexes(howMany, upperBoundry) {
      var resultIndexes = [];

      function getNewNumber() {
        return Math.floor(Math.random() * upperBoundry);
      }

      var rand;
      for (var i = 0; i < howMany; i++) {
        rand = getNewNumber();
        while (resultIndexes.indexOf(rand) !== -1) {
          // already been used, generate another
          rand = getNewNumber();
        }
        resultIndexes.push(rand);
      }
      answers = resultIndexes;
      return resultIndexes;
    }

    function generateCards(cardCount, targetPercentage) {
      var cards = [];
      for (var i = 0; i < cardCount; i++) {
        cards.push(new Card());
      }

      // Set random target cards
      // get number of random cards based on input percentage
      var numberOfTargets = Math.ceil(targetPercentage * cardCount);
      var targets = getRandomIndexes(numberOfTargets, cardCount);
      for (var i = 0; i< targets.length; i++) {
        cards[targets[i]].target = true;
      }
      return cards;
    }
    function getAnswers() {
      return answers;
    }

    return {
      generateCards: generateCards,
      getAnswers: getAnswers
    }
  });
