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
    taskSettings: TaskSettings
}

export class OperationSettings extends React.Component<Props, State> {
    public readonly state: State = {
        taskSettings: this.props.taskSettings
    }

    public render() {
        const exampleSettings = this.props.exampleSettings
        const baseOperation = this.props.baseOperation
        const operationCheckboxes = [baseOperation, baseOperation + 1]
            .map(this.renderOperationCheckbox.bind(this))

        return (
            <div>
                <div>
                    {operationCheckboxes}
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
                            <SettingInput exampleSettings={exampleSettings} name='minValue'/>
                        </td>
                        <td>
                            <SettingInput exampleSettings={exampleSettings} name='maxValue'/>
                        </td>
                    </tr>
                    <tr>
                        <th>Result</th>
                        <td>
                            <SettingInput exampleSettings={exampleSettings} name='minResult'/>
                        </td>
                        <td>
                            <SettingInput exampleSettings={exampleSettings} name='maxResult'/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    private renderOperationCheckbox(operation: Operation) {
        const operationNames = {
            [Operation.Add]: 'Add',
            [Operation.Sub]: 'Sub',
            [Operation.Mult]: 'Mult',
            [Operation.Div]: 'Div',
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
