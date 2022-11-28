const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(callback) {
        this.emit('log', 'started ...');
        callback();
        this.emit('log', 'finished ...');
    }
}



module.exports.Logger = Logger;