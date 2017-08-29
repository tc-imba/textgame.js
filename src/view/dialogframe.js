import _ from 'underscore';
import React from 'react';

export default class DialogFrame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style : {},
            rolePosition: "left",
            roleName: "role name",
            content: ""
        };
        props.parent.dialogFrame = this;
        // console.log(props.parent);
    }

    static defaultProps = {
        display: false
    };

    render() {
        // console.log(this);
        let roleClass = [
            "textgame-dialog-role",
            "textgame-box-align-center-v"
        ];
        if (this.state.rolePosition === "right") {
            roleClass.push("textgame-box-align-right")
        }
        let dialogStyle = {...this.state.style};
        if (!this.props.display) {
            dialogStyle.display = "none";
        }
        return (
            <div className="textgame-dialog-frame" style={dialogStyle}>
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

