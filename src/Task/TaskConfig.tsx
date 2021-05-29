import React from "react";
import {TaskSettingsManager} from "./TaskSettingsManager";
import {TaskSettings} from "./TaskSettings";
import {ExampleSettings} from "../Example/ExampleSettings";
import {SettingInput} from "./SettingInput";

interface Props {
    taskSettingsManager: TaskSettingsManager
    startNewTask: () => void
}

interface State {
    taskSettings: TaskSettings
}

export class TaskConfig extends React.Component<Props> {
    public readonly state: State = {
        taskSettings: this.getCurrentTaskSettings()
    }

    render() {
        const taskSettings = this.state.taskSettings;
        const addSettings = taskSettings.addSettings

        return (
            <div>
                <div>
                    <button onClick={this.clickHandler.bind(this)}>Start new task</button>
                </div>
                <h1>Task settings</h1>
                <div>
                    <input
                        type="number"
                        value={taskSettings.examplesCount}
                        onChange={this.changeExamplesCountHandler.bind(this)}/>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Minimum</th>
                        <th>Maximum</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Value</th>
                        <td>
                            <SettingInput exampleSettings={addSettings} name={'minValue'}/>
                        </td>
                        <td>
                            <SettingInput exampleSettings={addSettings} name={'maxValue'}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Result</th>
                        <td>
                            <SettingInput exampleSettings={addSettings} name={'minResult'}/>
                        </td>
                        <td>
                            <SettingInput exampleSettings={addSettings} name={'maxResult'}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
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

        return new TaskSettings(taskSettings.examplesCount, taskSettings.addSettings)
    }

            private clickHandler(): void {
        this.props.taskSettingsManager.saveTaskSettings(this.state.taskSettings)
        this.props.startNewTask()
    }

    private getCurrentTaskSettings(): TaskSettings {
        return this.props.taskSettingsManager.getCurrentSettings()
    }
}
