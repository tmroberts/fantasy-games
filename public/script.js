alert('I am working! !');
console.log('This is working');

'use strict';
if (this.LoDashIt === undefined) this.LoDashIt = {};

(function(context) {



  function start() {

    //Call your code here
    console.log('starting!', context);



  }

  context.start = start;

})(window.LoDashIt);
