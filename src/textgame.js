const Player = require('./player');
const View = require('./view');

class Textgame {

    constructor() {
        this.Trigger = require('./trigger');
        this.Role = require('./role');
        this.player = new Player();
        this.view = new View();
    }

    init() {

    }

}

module.exports = new Textgame();