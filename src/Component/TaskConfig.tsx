import React from "react";
import {TaskSettingsManager} from "../Task/TaskSettingsManager";
import {TaskSettings} from "../Task/TaskSettings";
import {StartNewTaskButton} from "./StartNewTaskButton";
import {OperationSettings} from "./OperationSettings";
import {Operation} from "../Example/Operation";
import {ProfileProvider} from "../Example/ProfileProvider";
import {AppStateProps} from "./AppStateProps";

interface State {
    examplesCount: string
    addExamplesOnError: boolean
    taskSettings: TaskSettings
}

export class TaskConfig extends React.Component<AppStateProps, State> {
    public readonly state: State = {
        examplesCount: this.getCurrentTaskSettings().examplesCount.toString(),
        addExamplesOnError: this.getCurrentTaskSettings().addExamplesOnError,
        taskSettings: this.getCurrentTaskSettings()
    }

    public render() {
        const taskSettings = this.state.taskSettings;

        return (
            <div className='wrap'>
                <div className='header'>
                    <h1>Настройки задания</h1>
                    <StartNewTaskButton onClick={this.clickHandler.bind(this)}/>
                </div>
                <div className="container">
                    Количество примеров:
                    <div>
                        <input
                            className='input_text'
                            type="number"
                            value={this.state.examplesCount}
                            onChange={this.changeExamplesCountHandler.bind(this)}/>
                    </div>
                    <label>
                        Добавлять 5 примеров при ошибке
                        <input
                            type="checkbox"
                            checked={this.state.addExamplesOnError}
                            onChange={this.changeAddExamplesOnErrorHandler.bind(this)}/>
                    </label>
                    <OperationSettings
                        baseOperation={Operation.Add}
                        taskSettings={taskSettings}
                        exampleSettings={taskSettings.addSettings}
                        profiles={this.props.profileProvider.addProfiles}/>
                    <OperationSettings
                        baseOperation={Operation.Mult}
                        taskSettings={taskSettings}
                        exampleSettings={taskSettings.multSettings}
                        profiles={this.props.profileProvider.multProfiles}/>
                </div>
            </div>
        )
    }

    private changeExamplesCountHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        const taskSettings = this.state.taskSettings
        const value = event.target.value
        taskSettings.examplesCount = +value
        this.setState({
            examplesCount: value,
        })
    }

    private changeAddExamplesOnErrorHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        const taskSettings = this.state.taskSettings
        const checked = event.target.checked
        taskSettings.addExamplesOnError=checked
        this.setState({
            addExamplesOnError: checked,
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
