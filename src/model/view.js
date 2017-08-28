import _ from 'underscore';
import React from 'react';
import ReactDOM from 'react-dom';
import MainFrame from '../view/mainframe';


export default class View {

    constructor() {

    }

    initFrame(element, style = {}) {
        this.mainframe = ReactDOM.render(
            <MainFrame style={style}/>,
            document.getElementById(element)
        );
        console.log(this.mainframe)
    }

    setFrameStyle(style) {
        const newStyle = _.extend(this.mainframe.state.style, style);

        this.mainframe.setState({style: newStyle});
    }


    async dialog(role, text = '') {
        console.log(role, text);
    }
}

// module.exports = View;