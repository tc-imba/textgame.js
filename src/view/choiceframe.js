import _ from 'underscore';
import React from 'react';

export default class ChoiceFrame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {},
            content: ""
        };
        props.parent.choiceFrame = this;
    }

    static defaultProps = {
        display: false
    };

    render() {
        let choiceStyle = {...this.state.style};
        if (!this.props.display) {
            choiceStyle.display = "none";
        }
        return (
            <div className="textgame-choice-frame" style={choiceStyle}>
                <div>{this.state.content}</div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        );
    }
}

