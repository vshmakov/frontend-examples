import {observer} from "mobx-react";
import {IsDisabledProps} from "./IsDisabledProps";
import React, {ReactElement} from "react";

export const DetailedSettings = observer(({isDisabled}: IsDisabledProps): ReactElement => {
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
                    <SettingInput exampleSettings={exampleSettings} name='minValue' disabled={isDisabled}/>
                </td>
                <td>
                    <SettingInput exampleSettings={exampleSettings} name='maxValue' disabled={isDisabled}/>
                </td>
            </tr>
            <tr>
                <th>Результат</th>
                <td>
                    <SettingInput exampleSettings={exampleSettings} name='minResult' disabled={isDisabled}/>
                </td>
                <td>
                    <SettingInput exampleSettings={exampleSettings} name='maxResult' disabled={isDisabled}/>
                </td>
            </tr>
            </tbody>
        </table>
    )
})
