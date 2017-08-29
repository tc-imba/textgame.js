import _ from 'underscore';
import React from 'react';
import ReactDOM from 'react-dom';
import MainFrame from '../view/mainframe';
import game from '../textgame';


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
        let state = this.getResetState();
        state.dialog = true;
        this.mainFrame.setState(state);

        this.mainFrame.dialogFrame.setState({
            roleName: role,
            content: text
        });
        this.dialogViewed = false;
        await game.utils.delayUntil(() => this.dialogViewed);
        console.log(role, text);
    }

    async choice(text, arr) {
        let state = this.getResetState();
        state.choice = true;
        this.mainFrame.setState(state);

        this.mainFrame.choiceFrame.setState({
            content: text
        });

        this.choiceSelected = -1;
        await game.utils.delayUntil(() => this.choiceSelected >= 0);

        console.log(text, arr);
    }

    getResetState() {
        return {
            dialog: false,
            choice: false
        };
    }

    reset() {
        this.mainFrame.setState(this.getResetState());
        console.log('reset');
    }

}

// module.exports = View;