'use strict';
if (this.Fantasy === undefined) this.Fantasy = {};

(function(context) {


    function generateCombatant() {

      var NameList =['red raider', 'red roscoe', 'red ryder', 'red ralph','blue brother', 'blue blazer', 'blue marlin', 'bob'];
      var randomNameIndex = Math.floor(Math.random() * NameList.length);

      // Display Name
      var name = NameList[randomNameIndex];
      console.log('Red Guy Name is:', name);

      var hp = generateHP();

      return {name: name, hp: hp};



    }

    context.generateCombatant = generateCombatant;


    function generateHitPointsBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }


    function generateHP(){
      var hp = generateHitPointsBetween(5,10);

      console.log('hp: ', hp);
      return hp;

    }

})(window.Fantasy);
