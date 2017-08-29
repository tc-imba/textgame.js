import _ from 'underscore';
import React from 'react';
import DialogFrame from './dialogframe';
import ChoiceFrame from './choiceframe';
import game from '../textgame';
import './frame.css';

export default class MainFrame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dialog: true,
        };
        this.onClick = this.onClick.bind(this);
    }

    componentWillMount() {
        this.state.style = this.props.style || {};
    }

    render() {
        return (
            <div className="textgame-main-frame" style={{...this.state.style}} onClick={this.onClick}>
                <ChoiceFrame parent={this} display={this.state.choice}/>
                <DialogFrame parent={this} display={this.state.dialog}/>
            </div>
        );
    }


    onClick(e) {
        // console.log(this.state.dialog);
        if (this.state.dialog) {
            game.view.dialogViewed = true;
            // console.log('onClick');
        }
    }
}

