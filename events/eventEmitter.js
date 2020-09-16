const EventEmitter = require('events');

module.exports = myEmitter = new EventEmitter.EventEmitter();

function c1(test) {
    console.log('an event occurred!'+test);
}

function c2(test) {
    console.log('yet another event occurred!'+test);
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne

setTimeout(() => {
    myEmitter.emit('eventOne', 'testtxt1');
}, 1000)
