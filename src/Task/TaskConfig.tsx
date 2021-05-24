import React from "react";
import {TaskSettingsManager} from "./TaskSettingsManager";
import {TaskSettings} from "./TaskSettings";

interface Props {
    taskSettingsManager: TaskSettingsManager
    startNewTask: () => void
}

interface State {
    addSettings: TaskSettings
}

export class TaskConfig extends React.Component<Props> {
    public readonly state: State = {
        addSettings: this.props.taskSettingsManager.getCurrentSettings()
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.props.startNewTask}>Start new task</button>
                </div>
                <h1>Task settings</h1>
                <input type="number" value={this.state.addSettings.examplesCount}
                       onChange={this.changeHandler.bind(this)}/>
            </div>
        )
    }

    private changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        this.props.taskSettingsManager.setExamplesCount(+event.target.value)
        this.setState({
            addSettings: this.props.taskSettingsManager.getCurrentSettings()
        })
    }
}
