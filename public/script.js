'use strict';
if (this.Fantasy === undefined) this.Fantasy = {};

(function(context) {

    // Initialize your vars here...
    // NOTHING goes outside the IFFE
    var fighter1;
    var fighter2;
    var startButton = $('.start-button');
    var intervalId;
    var $message;

    function updateCombatantDisplay(){
      var templateHtml = $('#char-template').html();
      var templateFunc = _.template(templateHtml);

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

      if (fighter1.hp < 1 || fighter2.hp < 1 ) {
        clearInterval(intervalId);
        console.log('battle over');
      }

      if (fighter1.hp  <= 0) {
        $('.red-dude .sprite').removeClass('hurt');
        $('.red-dude .sprite').addClass('hurt');

      }

      if (fighter1.hp < 5 ) {
        $('.red-dude .sprite').addClass('hurt');
      }


      // if (fighter1.hp = 0) {
      //   $('.red-dude .sprite').removeClass('hurt');
      //   $('.red-dude .sprite').addClass('dead');
      //
      // }




      if (fighter2.hp  <= 0) {
        $('.blue-dude .sprite').removeClass('hurt');
        $('.blue-dude .sprite').addClass('hurt');

      }

      if (fighter2.hp < 5 ) {
        $('.blue-dude .sprite').addClass('hurt');
      }

      // if (fighter2.hp = 0) {
      //   $('.blue-dude .sprite').removeClass('hurt');
      //   $('.blue-dude .sprite').addClass('dead');
      //
      // }



      // Update the view
      updateCombatantDisplay()
    }


    function startClicked() {
      $('.start-button').toggle();

      $message = $('.message');

      $message.text('Combat in progress');

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
