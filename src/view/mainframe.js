import _ from 'underscore';
import React from 'react';
import DialogFrame from './dialogframe';
import game from '../textgame';
import './frame.css';

export default class MainFrame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: "dialog",
        };
        this.onClick = this.onClick.bind(this);
    }

    componentWillMount() {
        this.state.style = this.props.style || {};
    }

    render() {
        return (
            <div className="textgame-main-frame" style={{...this.state.style}} onClick={this.onClick}>
                mainframe begin
                <DialogFrame style={{}} parent={this}/>
                main frame end
            </div>
        );
    }

    onClick(e) {
        if (this.state.status === "dialog") {
            game.view.dialogViewed = true;
            console.log('onClick');
        }
    }
}

