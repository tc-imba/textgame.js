//const game = require('../../textgame');

import game from '../../src/textgame';


module.exports = {
    name: "init",
    event: {
        type: "init"
    },
    condition: true,
    action: async () => {
        await game.view.dialog('旁白', '欢迎来到本游戏 Be Naive in JI');
        await game.view.dialog('旁白', '本游戏由textgame.js制作，https://github.com/tc-imba/textgame.js');
        await game.view.dialog('旁白', '即将开始初始化角色');

        await game.view.choice("请选择你的性别", ["男", "女"]);

    }
};
