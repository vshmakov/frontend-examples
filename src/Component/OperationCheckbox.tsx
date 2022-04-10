import {observer} from "mobx-react";
import {TaskSettings} from "../Task/TaskSettings";
import {Operation} from "../Example/Operation";
import React, {ReactElement} from "react";
import css from "./OperationSettings.module.css";
import {TaskSettingsProps} from "./TaskSettingsProps";

const operationNames = {
    [Operation.Add]: 'Сложение',
    [Operation.Sub]: 'Вычитание',
    [Operation.Mult]: 'Умножение',
    [Operation.Div]: 'Деление',
}

export const OperationCheckbox = observer(({
                                               taskSettings,
                                               operation
                                           }: { operation: Operation } & TaskSettingsProps): ReactElement => {
    return (
        <div className={css.main_operation_checkox_block}>
            <input className={css.main_operation_checkox}
                   id={'MainOperationCheckox' + operation}
                   type="checkbox"
                   checked={taskSettings.operations.includes(operation)}
                   onChange={this.changeCheckboxHandler.bind(this, operation)}/>
            <label key={operation} htmlFor={'MainOperationCheckox' + operation}>
                {operationNames[operation]}
            </label>
        </div>
    )
})



function changeCheckboxHandler(operation: Operation): void {
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
