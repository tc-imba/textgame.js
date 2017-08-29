//const game = require('../../textgame');

import game from '../textgame';

export default class UtilsModel {
    constructor() {

    }

    now() {
        return game._time;
    }

    delay(miliseconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, miliseconds);
        });
    }

    async delayUntil(func) {
        while (!func()) await this.delay(25);
    }

}

//module.exports = UtilsModel;