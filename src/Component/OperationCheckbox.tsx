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
                   onChange={(): void => {
                       let operations = taskSettings.operations

                       if (!operations.includes(operation)) {
                           operations.push(operation)
                       } else {
                           operations = operations.filter((enabledOperation: Operation): boolean => enabledOperation !== operation)
                       }

                       taskSettings.operations = operations
                   }}/>
            <label key={operation} htmlFor={'MainOperationCheckox' + operation}>
                {operationNames[operation]}
            </label>
        </div>
    )
})
