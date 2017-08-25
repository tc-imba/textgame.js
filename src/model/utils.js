//const game = require('../../textgame');

import game from '../textgame';

export default class UtilsModel {
    constructor() {

    }

    now() {
        return game._time;
    }
}

//module.exports = UtilsModel;