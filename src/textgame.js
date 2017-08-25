import Player from './player'
import View from './model/view'
import TriggerModel from './model/trigger'
import UtilsModel from './model/utils'

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

const game = new Textgame();
export default game;

//module.exports = new Textgame();