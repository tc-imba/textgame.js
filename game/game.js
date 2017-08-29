import game from '../src/textgame';

//const game = require('../textgame');


game.view.initFrame('mainframe');

game.trigger.create(require('./triggers/init'));
// console.log(game.trigger._initEvent);

game.trigger.init();




/*setTimeout(() => {
    game.view.setFrameStyle({
        width: '1000px',
        //border: null
    })
}, 500);*/


/*const init = require('./triggers/init');

const role = new game.Role({
    name: "aaa",
});

role.setAttr('111', 2);
console.log(role.getAttr('111'));

setTimeout(async function () {
    await init.action();
}, 0);*/

