alert('I am working! !');
console.log('This is working');

'use strict';
if (this.ClickTimes === undefined) this.ClickTimes = {};

(function(context) {

  var clickTimes = [];
  var clickLogUlDOM;

  function clicked() {
    var date = new Date();

    //Fix this stuff
    var hours = date.getHours(); //get this
    var minutes = date.getMinutes(); //get this
    var seconds = date.getSeconds(); //get this
    //var prevClick = clickTimes[clickTimes.length-1];
    //console.log('This is clickTimes: ', clickTimes);
    // console.log('This is arrayLength : ', clickTimes.length);
    // console.log('This is clickTimes CURRENT click ', date);
    // console.log('This is clickTimes PREVIOUS click: ', prevClick);
    var differenceInMilliseconds = date - clickTimes[clickTimes.length-1]; //calculate this

    if (clickTimes.length === 0) {
      createListItem(0, hours, minutes, seconds);
    }
    else {
      createListItem(differenceInMilliseconds, hours, minutes, seconds);
    }

    clickTimes.push(date);
  }

  function createListItem(millisecondDiff, hours, minutes, seconds) {
    var li = document.createElement('li');
    li.textContent = millisecondDiff
    + ' - '
    + hours
    + ':'
    + minutes
    + ':'
    + seconds;

    clickLogUlDOM.appendChild(li);
  }

  function start() {

    //Call your code here
    console.log('starting!', context);

    var button = document.querySelector('#click-me');
    clickLogUlDOM = document.querySelector('#click-log');

    button.addEventListener('click', clicked);

  }

  context.start = start;

})(window.ClickTimes);
