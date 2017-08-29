//const game = require('../../textgame');

import game from '../../textgame';


module.exports = {
    name: "init",
    event: {
        type: "init"
    },
    condition: true,
    action: async () => {
        await game.view.dialog('旁白', 'xxx');
        await game.view.dialog('旁白', 'yyy');
        await game.view.dialog('旁白', 'zzz');
    }
};
