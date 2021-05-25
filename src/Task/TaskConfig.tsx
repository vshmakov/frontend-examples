import React from "react";
import {TaskSettingsManager} from "./TaskSettingsManager";
import {TaskSettings} from "./TaskSettings";
import {ExampleSettings} from "../Example/ExampleSettings";

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
                            <input
                                type="number"
                                value={addSettings.minValue}
                                onChange={this.getChangeSettingsHandler('minValue')}/>
                        </td>
                        <td>
                            <input
                                type="number"
                                value={addSettings.maxValue}
                                onChange={this.getChangeSettingsHandler('maxValue')}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Result</th>
                        <td>
                            <input
                                type="number"
                                value={addSettings.minResult}
                                onChange={this.getChangeSettingsHandler('minResult')}/>
                        </td>
                        <td>
                            <input
                                type="number"
                                value={addSettings.maxResult}
                                onChange={this.getChangeSettingsHandler('maxResult')}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    private changeExamplesCountHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        this.state.taskSettings.examplesCount = +event.target.value
        this.setState({
            taskSettings: this.state.taskSettings
        })
    }

    private getChangeSettingsHandler(name: keyof ExampleSettings): (event: React.ChangeEvent<HTMLInputElement>) => void {
        return (event: React.ChangeEvent<HTMLInputElement>): void => this.changeSettingsHandler(event, name)
    }

    private changeSettingsHandler(event: React.ChangeEvent<HTMLInputElement>, name: keyof ExampleSettings): void {
        this.state.taskSettings.addSettings[name] = +event.target.value
        this.setState({
            taskSettings: this.state.taskSettings
        })
    }

    private clickHandler(): void {
        this.props.taskSettingsManager.saveTaskSettings(this.state.taskSettings)
        this.props.startNewTask()
    }

    private getCurrentTaskSettings(): TaskSettings {
        return this.props.taskSettingsManager.getCurrentSettings()
    }
}
