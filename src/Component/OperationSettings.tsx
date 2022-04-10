import React, {ReactElement, useState} from "react";
import {Profile} from "../Example/Profile";
import css from './OperationSettings.module.css';
import {observer} from "mobx-react";
import {OpenSettingsSvg} from "./OpenSettingsSvg";
import {BaseOperation} from "./BaseOperation";
import {getOperations} from "./GetOperations";
import {Operation} from "../Example/Operation";
import {OperationCheckbox} from "./OperationCheckbox";
import {ExampleSettingsProps} from "./ExampleSettingsProps";
import {TaskSettingsProps} from "./TaskSettingsProps";
import {ProfileRadio} from "./ProfileRadio";
import {DetailedSettings} from "./DetailedSettings";

interface Props {
    baseOperation: BaseOperation
    profiles: Profile[]
}

export const OperationSettings = observer(({
                                               baseOperation,
                                               taskSettings,
                                               exampleSettings,
                                               profiles
                                           }: Props & TaskSettingsProps & ExampleSettingsProps): ReactElement => {
    const [isSettingsOpened, setSettingsOpened] = useState(false)
    const operations = getOperations(baseOperation)
    const isDisabled = !operations.some((operation: Operation): boolean => taskSettings.operations.includes(operation))

    return (
        <div className={css.settings_container}>
            <div className={css.operation_checkboxes_list}>
                {operations.map((operation: Operation): ReactElement =>
                    <OperationCheckbox taskSettings={taskSettings} operation={operation} key={operation}/>)}
            </div>
            <form>
                {profiles.map((profile: Profile): ReactElement => <ProfileRadio profile={profile}
                                                                                isDisabled={isDisabled}
                                                                                exampleSettings={exampleSettings}
                                                                                key={profile.name}/>)}
            </form>
            <div className={`${css.settings} ${!isSettingsOpened ? "" : css.settings_opened}`}>
                <button className={css.settings_btn} onClick={(): void => setSettingsOpened(!isSettingsOpened)}>
                    Детальные настройки
                    <OpenSettingsSvg isSettingsOpened={isSettingsOpened}/>
                </button>
                {isSettingsOpened ?
                    <DetailedSettings exampleSettings={exampleSettings} isDisabled={isDisabled}/> : null}
            </div>
        </div>
    )
})
