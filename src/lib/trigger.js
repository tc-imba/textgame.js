const _ = require('underscore');

class Trigger {

    constructor(id, options) {
        _.extend(this, options);
        this._id = id;
    }



}

module.exports = Trigger;