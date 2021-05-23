import React from "react";

interface Props {
    startNewTask: () => void
}

export class TaskConfig extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1>Task settings</h1>
                <div>
                    <button onClick={this.props.startNewTask}>Start new task</button>
                </div>
            </div>
        )
    }
}
