const Player = require('./player');
const View = require('./view');

const TriggerModel = require('./model/trigger');

class Textgame {

    constructor() {
        this.Trigger = require('./trigger');
        this.Role = require('./role');
        this.player = new Player();
        this.view = new View();
        this.trigger = new TriggerModel();
    }

    init() {

    }

}

module.exports = new Textgame();