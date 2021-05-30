import React from "react";

interface Props {
    onClick: () => void
}

export class StartNewTaskButton extends React.Component<Props> {
    render() {
        return (
            <button onClick={this.props.onClick}>Start new task</button>
        )
    }
}
