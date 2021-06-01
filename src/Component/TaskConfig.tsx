import React from "react";
import {TaskSettingsManager} from "../Task/TaskSettingsManager";
import {TaskSettings} from "../Task/TaskSettings";
import {StartNewTaskButton} from "./StartNewTaskButton";
import {OperationSettings} from "./OperationSettings";
import {Operation} from "../Example/Operation";
import {ProfileProvider} from "../Example/ProfileProvider";

interface Props {
    taskSettingsManager: TaskSettingsManager
    profileProvider: ProfileProvider
    startNewTask: () => void
}

interface State {
    examplesCount: string
    taskSettings: TaskSettings
}

export class TaskConfig extends React.Component<Props, State> {
    public readonly state: State = {
        examplesCount: this.getCurrentTaskSettings().examplesCount.toString(),
        taskSettings: this.getCurrentTaskSettings()
    }

    public render() {
        const taskSettings = this.state.taskSettings;

        return (
            <div>
                <div>
                    <StartNewTaskButton onClick={this.clickHandler.bind(this)}/>
                </div>
                <h1>Настройки задания</h1>
                Количество примеров: <div>
                <input
                    type="number"
                    value={this.state.examplesCount}
                    onChange={this.changeExamplesCountHandler.bind(this)}/>
            </div>
                <OperationSettings
                    baseOperation={Operation.Add}
                    taskSettings={taskSettings}
                    exampleSettings={taskSettings.addSettings}
                    profiles={this.props.profileProvider.addProfiles}/>
            </div>
        )
    }

    private changeExamplesCountHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        const taskSettings = this.getNewTaskSettings()
        const value = event.target.value
        taskSettings.examplesCount = +value
        this.setState({
            examplesCount: value,
            taskSettings: taskSettings
        })
    }

    private getNewTaskSettings(): TaskSettings {
        const taskSettings = this.state.taskSettings

        return {
            examplesCount: taskSettings.examplesCount,
            operations: taskSettings.operations,
            addSettings: taskSettings.addSettings,
        }
    }

    private clickHandler(): void {
        this.props.taskSettingsManager.saveTaskSettings(this.state.taskSettings)
        this.props.startNewTask()
    }

    private getCurrentTaskSettings(): TaskSettings {
        return this.props.taskSettingsManager.getCurrentSettings()
    }
}
