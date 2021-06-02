import React from "react";
import {SettingInput} from "./SettingInput";
import {ExampleSettings} from "../Example/ExampleSettings";
import {Operation} from "../Example/Operation";
import {TaskSettings} from "../Task/TaskSettings";
import {Profile} from "../Example/Profile";
import {copyValues, isEqual} from "../ObjectManipulator";

interface Props {
    baseOperation: Operation.Add | Operation.Mult
    taskSettings: TaskSettings
    exampleSettings: ExampleSettings
    profiles: Profile[]
}

interface State {
    isSettingsOpened: boolean
    taskSettings: TaskSettings
    exampleSettings: ExampleSettings
}

export class OperationSettings extends React.Component<Props, State> {
    public readonly state: State = {
        isSettingsOpened: false,
        taskSettings: this.props.taskSettings,
        exampleSettings: this.props.exampleSettings,
    }

    public render() {
        const operationCheckboxes = this.operations.map(this.renderOperationCheckbox.bind(this))

        return (
            <div>
                <div>
                    {operationCheckboxes}
                </div>
                <form>
                    {this.props.profiles.map(this.renderProfile.bind(this))}
                </form>
                <div>
                    <button onClick={(): void => this.setState({isSettingsOpened: !this.state.isSettingsOpened})}>
                        {!this.state.isSettingsOpened ? "Показать детальные настройки" : "Скрыть"}
                    </button>
                </div>
                {this.renderSettings(this.state.exampleSettings)}
            </div>
        )
    }

    private get operations(): Operation[] {
        const baseOperation = this.props.baseOperation

        return [baseOperation, baseOperation + 1]
    }

    private renderProfile(profile: Profile) {
        return (
            <label key={profile.name}>
                <input
                    type="radio"
                    name='profile'
                    checked={isEqual(this.state.exampleSettings, profile.exampleSettings)}
                    disabled={this.isInputDisabled}
                    onChange={this.changeRadioHandler.bind(this, profile)}/>
                {profile.name}
            </label>
        )
    }

    private get isInputDisabled(): boolean {
        return !this.props
            .taskSettings
            .operations
            .some((operation: Operation): boolean => this.operations.includes(operation))
    }

    private changeRadioHandler(profile: Profile): void {
        const exampleSettings = this.state.exampleSettings
        copyValues(exampleSettings, profile.exampleSettings)
        this.setState({
            exampleSettings: exampleSettings
        })
    }

    private renderSettings(exampleSettings: ExampleSettings) {
        const isInputDisabled=this.isInputDisabled
        const key = JSON.stringify([isInputDisabled, exampleSettings])

        return !this.state.isSettingsOpened ? '' : (
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Минимум</th>
                    <th>Максимум</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Значение</th>
                    <td>
                        <SettingInput exampleSettings={exampleSettings} name='minValue' key={key} disabled={isInputDisabled}/>
                    </td>
                    <td>
                        <SettingInput exampleSettings={exampleSettings} name='maxValue' key={key} disabled={isInputDisabled}/>
                    </td>
                </tr>
                <tr>
                    <th>Результат</th>
                    <td>
                        <SettingInput exampleSettings={exampleSettings} name='minResult' key={key} disabled={isInputDisabled}/>
                    </td>
                    <td>
                        <SettingInput exampleSettings={exampleSettings} name='maxResult' key={key} disabled={isInputDisabled}/>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }

    private renderOperationCheckbox(operation: Operation) {
        const operationNames = {
            [Operation.Add]: 'Сложение',
            [Operation.Sub]: 'Вычитание',
            [Operation.Mult]: 'Умножение',
            [Operation.Div]: 'Деление',
        }

        return (
            <label key={operation}>
                <input
                    type="checkbox"
                    checked={this.state.taskSettings.operations.includes(operation)}
                    onChange={this.changeCheckboxHandler.bind(this, operation)}/>
                {operationNames[operation]}
            </label>
        )
    }

    private changeCheckboxHandler(operation: Operation): void {
        const taskSettings = this.state.taskSettings
        const enabledOperations = taskSettings.operations
            .filter((enabledOperation: Operation): boolean => enabledOperation !== operation)

        if (!taskSettings.operations.includes(operation)) {
            enabledOperations.push(operation)
        }

        taskSettings.operations = enabledOperations
        this.setState({
            taskSettings: taskSettings
        })
    }
}
