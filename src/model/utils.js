const game = require('../../textgame');

class UtilsModel {
    constructor() {

    }

    now() {
        return game._time;
    }
}

module.exports = UtilsModel;