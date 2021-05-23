import React from "react";
import {TaskSettingsProvider} from "./TaskSettingsProvider";

interface Props {
    taskSettingsProvider: TaskSettingsProvider
    startNewTask: () => void
}

export class TaskConfig extends React.Component<Props> {
    render() {
        const currentSettings = this.props.taskSettingsProvider.getCurrentSettings()

        return (
            <div>
                <div>
                    <button onClick={this.props.startNewTask}>Start new task</button>
                </div>
                <h1>Task settings</h1>
                <form>
                    <input type="number" value={currentSettings.examplesCount}/>
                </form>
            </div>
        )
    }
}
