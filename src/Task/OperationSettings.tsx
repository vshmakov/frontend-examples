import React from "react";
import {SettingInput} from "./SettingInput";
import {ExampleSettings} from "../Example/ExampleSettings";
import {Operation} from "../Example/Operation";
import {TaskSettings} from "./TaskSettings";

interface Props {
    baseOperation: Operation.Add | Operation.Mult
    taskSettings: TaskSettings
    exampleSettings: ExampleSettings
}

interface State {
    isSettingsOpened: boolean
    taskSettings: TaskSettings
}

export class OperationSettings extends React.Component<Props, State> {
    public readonly state: State = {
        isSettingsOpened: false,
        taskSettings: this.props.taskSettings
    }

    public render() {
        const baseOperation = this.props.baseOperation
        const operationCheckboxes = [baseOperation, baseOperation + 1]
            .map(this.renderOperationCheckbox.bind(this))

        return (
            <div>
                <div>
                    {operationCheckboxes}
                </div>
                <div>
                    <button onClick={(): void => this.setState({isSettingsOpened: !this.state.isSettingsOpened})}>
                        {!this.state.isSettingsOpened ? "Открыть детальные настройки" : "Спрятать"}
                    </button>
                </div>
                {this.renderSettings(this.props.exampleSettings)}
            </div>
        )
    }

    private renderSettings(exampleSettings: ExampleSettings) {
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
                        <SettingInput exampleSettings={exampleSettings} name='minValue'/>
                    </td>
                    <td>
                        <SettingInput exampleSettings={exampleSettings} name='maxValue'/>
                    </td>
                </tr>
                <tr>
                    <th>Результат</th>
                    <td>
                        <SettingInput exampleSettings={exampleSettings} name='minResult'/>
                    </td>
                    <td>
                        <SettingInput exampleSettings={exampleSettings} name='maxResult'/>
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
                    onChange={this.changeHandler.bind(this, operation)}/>
                {operationNames[operation]}
            </label>
        )
    }

    private changeHandler(operation: Operation, event: React.ChangeEvent<HTMLInputElement>): void {
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
