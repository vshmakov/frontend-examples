import {observer} from "mobx-react";
import {IsDisabledProps} from "./IsDisabledProps";
import React, {ReactElement} from "react";
import {SettingInput} from "./SettingInput";
import {ExampleSettingsProps} from "./ExampleSettingsProps";

export const DetailedSettings = observer(({isDisabled, exampleSettings}: IsDisabledProps & ExampleSettingsProps): ReactElement => {
    return (
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
                    <SettingInput exampleSettings={exampleSettings} name='minValue' isDisabled={isDisabled}/>
                </td>
                <td>
                    <SettingInput exampleSettings={exampleSettings} name='maxValue' isDisabled={isDisabled}/>
                </td>
            </tr>
            <tr>
                <th>Результат</th>
                <td>
                    <SettingInput exampleSettings={exampleSettings} name='minResult' isDisabled={isDisabled}/>
                </td>
                <td>
                    <SettingInput exampleSettings={exampleSettings} name='maxResult' isDisabled={isDisabled}/>
                </td>
            </tr>
            </tbody>
        </table>
    )
})
