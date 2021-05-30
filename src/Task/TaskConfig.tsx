import React from "react";
import {TaskSettingsManager} from "./TaskSettingsManager";
import {TaskSettings} from "./TaskSettings";
import {StartNewTaskButton} from "./StartNewTaskButton";
import {OperationSettings} from "./OperationSettings";
import {Operation} from "../Example/Operation";

interface Props {
    taskSettingsManager: TaskSettingsManager
    startNewTask: () => void
}

interface State {
    taskSettings: TaskSettings
}

export class TaskConfig extends React.Component<Props, State> {
    public readonly state: State = {
        taskSettings: this.getCurrentTaskSettings()
    }

    public render() {
        const taskSettings = this.state.taskSettings;

        return (
            <div>
                <div>
                    <StartNewTaskButton onClick={this.clickHandler.bind(this)}/>
                </div>
                <h1>Task settings</h1>
                <div>
                    <input
                        type="number"
                        value={taskSettings.examplesCount}
                        onChange={this.changeExamplesCountHandler.bind(this)}/>
                </div>
<OperationSettings baseOperation={Operation.Add} taskSettings={taskSettings} exampleSettings={taskSettings.addSettings}/>
            </div>
        )
    }

    private changeExamplesCountHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        const taskSettings = this.getNewTaskSettings()
        taskSettings.examplesCount = +event.target.value
        this.setState({
            taskSettings: taskSettings
        })
    }

    private getNewTaskSettings(): TaskSettings {
        const taskSettings = this.state.taskSettings

        return new TaskSettings(taskSettings.examplesCount, taskSettings.operations, taskSettings.addSettings)
    }

    private clickHandler(): void {
        this.props.taskSettingsManager.saveTaskSettings(this.state.taskSettings)
        this.props.startNewTask()
    }

    private getCurrentTaskSettings(): TaskSettings {
        return this.props.taskSettingsManager.getCurrentSettings()
    }
}
