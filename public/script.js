'use strict';
if (this.Fantasy === undefined) this.Fantasy = {};

(function(context) {

    // Initialize your vars here...
    // NOTHING goes outside the IFFE
    var fighter1;
    var fighter2;
    var templateFunc;
    var startButton = $('.start-button');
    var intervalId;


    function updateCombatantDisplay(){
      var templateHtml = $('#char-template').html();
      templateFunc = _.template(templateHtml);

      var html = templateFunc(fighter1);
      $('.red-dude .info').html(html);

      var html = templateFunc(fighter2);
      $('.blue-dude .info').html(html);

    }

    var roundCount = 0

    function doRound(){

      var damage = Math.floor(Math.random() * 3)
      fighter1.hp -= damage;
      var damage = Math.floor(Math.random() * 3)
      fighter2.hp -= damage;

      if (fighter1.hp < 1 || fighter2.hp <1 ) {
        clearInterval(intervalId);
        console.log('battle over');
      }
      // Update the view
      updateCombatantDisplay()
    }


    function startClicked() {
      intervalId = setInterval(doRound,1000);
    }

    function start() {

      fighter1 = context.generateCombatant();
      fighter2 = context.generateCombatant();

      $('.start-button').on('click',startClicked);

      //initial update of the view
      updateCombatantDisplay()

    }

    context.start = start;

})(window.Fantasy);
