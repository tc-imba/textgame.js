import _ from 'underscore';
import React from 'react';
import DialogFrame from './dialogframe';
import './frame.css';

export default class MainFrame extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
        this.state.style = this.props.style || {};
    }

    render() {
        return (
            <div className="textgame-main-frame" style={{...this.state.style}}>
                mainframe begin
                <DialogFrame style={{}}/>
                main frame end
            </div>
        );
    }
}

