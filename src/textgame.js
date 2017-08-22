const Player = require('./player');
const View = require('./model/view');

const TriggerModel = require('./model/trigger');
const UtilsModel = require('./model/utils');

class Textgame {

    constructor() {
        this._time = 0;

        this.player = new Player();
        this.view = new View();
        this.trigger = new TriggerModel();
        this.utils = new UtilsModel();
    }

    init() {

    }

}

module.exports = new Textgame();