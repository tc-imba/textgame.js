import _ from 'underscore';
import React from 'react';

export default class DialogFrame extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
        this.state.style = this.props.style || {};
    }

    render() {
        return (
            <div className="textgame-dialog-frame mb-3" style={{...this.state.style}}>
                test
            </div>
        );
    }
}

