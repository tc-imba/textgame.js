import _ from 'underscore';
import React from 'react';
import ReactDOM from 'react-dom';
import MainFrame from '../view/mainframe';
import game from '../textgame';
import async from 'neo-async';
import pify from 'pify';

export default class View {

    constructor() {
        this.dialogViewed = false;
    }

    initFrame(element, style = {}) {
        this.mainFrame = ReactDOM.render(
            <MainFrame style={style}/>,
            document.getElementById(element)
        );
    }

    setFrameStyle(style) {
        const newStyle = _.extend(this.mainFrame.state.style, style);

        this.mainFrame.setState({style: newStyle});
    }


    async dialog(role, text = '') {
        // console.log(this.mainFrame);
        // console.log(this.mainFrame.dialogFrame);
        this.mainFrame.dialogFrame.setState({
            roleName: role,
            content: text
        });
        this.dialogViewed = false;
        await game.utils.delayUntil(() => this.dialogViewed);
        console.log(role, text);
    }
}

// module.exports = View;