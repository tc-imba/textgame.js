const _ = require('underscore');

class Role {

    constructor(options) {
        _.extend(this, options);
        this._attributes = {};
        //console.log(this);
    }

    getAttr(key) {
        return this._attributes[key];
    }

    setAttr(key, value) {
        if (_.isObject(key)) _.extend(this._attributes, key);
        else this._attributes[key] = value;
    }

}

module.exports = Role;