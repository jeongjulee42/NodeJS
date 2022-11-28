const { emit } = require('nodemon');
const logger = require('./main.js');
const emitter = new logger.Logger();

emitter.log(() => {
    console.log('Doing something');
})