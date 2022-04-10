import React, {ReactElement, useState} from "react";
import {ExampleSettings} from "../Example/ExampleSettings";
import {TaskSettings} from "../Task/TaskSettings";
import {Profile} from "../Example/Profile";
import css from './OperationSettings.module.css';
import {observer} from "mobx-react";
import {OpenSettingsSvg} from "./OpenSettingsSvg";
import {BaseOperation} from "./BaseOperation";
import {getOperations} from "./GetOperations";


interface Props extends Props1 {
    baseOperation: BaseOperation
    taskSettings: TaskSettings
    exampleSettings: ExampleSettings
    profiles: Profile[]
}

export const OperationSettings = observer(({baseOperation}: Props): ReactElement => {
    const [isSettingsOpened, setSettingsOpened] = useState(false)
    const operationCheckboxes getOperations(baseOperation).map(this.renderOperationCheckbox.bind(this))

    return (
        <div className={css.settings_container}>
            <div className={css.operation_checkboxes_list}>
                {operationCheckboxes}
            </div>
            <form>
                {this.props.profiles.map(this.renderProfile.bind(this))}
            </form>
            <div className={`${css.settings} ${!this.state.isSettingsOpened ? "" : css.settings_opened}`}>
                <button className={css.settings_btn}                        onClick={(): void => setSettingsOpened(!isSettingsOpened)}>
                    Детальные настройки
                    <OpenSettingsSvg isSettingsOpened={isSettingsOpened}/>
                </button>
                {this.renderSettings(this.state.exampleSettings)}
            </div>
        </div>
    )
})
