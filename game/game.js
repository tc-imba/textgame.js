const game = require('../textgame');
const init = require('./triggers/init');

const role = new game.Role({
    name: "aaa",
});

role.setAttr('111', 2);
console.log(role.getAttr('111'));

setTimeout(async function () {
    await init.action();
}, 0);

