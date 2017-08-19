const game = require('../../textgame');

module.exports = new game.Trigger({
    name: "init",
    event: {
        type: "init"
    },
    condition: true,
    action: async () => {
        await game.view.dialog('旁白', 'xxx');
    }
});
