const _ = require('underscore');

export default class Trigger {

    constructor(id, options) {
        _.extend(this, options);
        this._id = id;
    }



}

//module.exports = Trigger;