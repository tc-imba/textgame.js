import _ from 'underscore';
import React from 'react';

export default class DialogFrame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rolePosition: "left",
            roleName: "role name",
            content: ""
        };
        props.parent.dialogFrame = this;
        // console.log(props.parent);
    }

    componentWillMount() {
        this.state.style = this.props.style || {};
    }

    render() {
        // console.log(this);
        let roleClass = [
            "textgame-dialog-role",
            "textgame-box-align-center-v"
        ];
        if (this.state.rolePosition === "right") {
            roleClass.push("textgame-box-align-right")
        }
        return (
            <div className="textgame-dialog-frame" style={{...this.state.style}}>
                <div className={roleClass.join(' ')}>
                    {this.state.roleName}
                </div>
                <div className="textgame-dialog-content ">
                    {this.state.content}
                </div>
            </div>
        );
    }
}

