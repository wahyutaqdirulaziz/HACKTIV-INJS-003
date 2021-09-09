var events = require('events');
var eventEmitter = new events.EventEmitter();
var eventEmitter1 = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

var myEvent = function () {
    console.log('listener 2');
  }

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);
eventEmitter1.on('tes', Error());

//Fire the 'scream' event:
eventEmitter.emit('scream');
eventEmitter1.emit('tes');
