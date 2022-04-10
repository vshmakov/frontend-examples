import {observer} from "mobx-react";
import {Profile} from "../Example/Profile";
import {ExampleSettingsProps} from "./ExampleSettingsProps";
import React, {ReactElement} from "react";
import css from "./OperationSettings.module.css";
import {copyValues, isEqual} from "../ObjectManipulator";
import {IsDisabledProps} from "./IsDisabledProps";

export const ProfileRadio = observer(({
                                          profile,
                                          isDisabled,
                                          exampleSettings,
                                      }: { profile: Profile } & IsDisabledProps & ExampleSettingsProps): ReactElement => {
    return (
        <label className={css.input_radio_wrap} key={profile.name}>
            <input
                type="radio"
                name='profile'
                checked={!isDisabled && isEqual(exampleSettings, profile.exampleSettings)}
                disabled={isDisabled}
                onChange={(): void => copyValues(exampleSettings, profile.exampleSettings)}/>
            {profile.name}
        </label>
    )
})
