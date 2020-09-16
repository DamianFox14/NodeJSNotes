const eventBus = require('./eventEmitter');

eventBus.on('eventOne', (test) => {
    console.log('OtheClass'+test);
});

eventBus.emit('eventOne', 'testtxt2');
