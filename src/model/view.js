import React from 'react';
import ReactDOM from 'react-dom';
import MainFrame from '../view/mainframe';

export default class View {

    constructor() {

    }

    initFrame(element, height, width) {
        ReactDOM.render(
            <MainFrame />,
            document.getElementById(element)
        );
    }

    async dialog(role, text = '') {
        console.log(role, text);
    }
}

// module.exports = View;