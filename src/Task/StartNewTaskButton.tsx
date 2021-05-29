import React from "react";

interface Props {
    clickHandler: () => void
}

export class StartNewTaskButton extends React.Component<Props> {
    render() {
        return (
            <button onClick={this.props.clickHandler}>Start new task</button>
        )
    }
}
