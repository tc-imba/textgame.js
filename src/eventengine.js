const Event = require('./lib/event');

class EventEngine {

    _events = [];
    _eventCount = 0;

    createEvent(options = {}) {
        const id = this._eventCount++;
        const event = new Event(id);
        this._events.push(event);

    }

}

const instance = new EventEngine();
module.exports = instance;