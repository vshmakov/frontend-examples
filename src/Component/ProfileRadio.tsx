import {observer} from "mobx-react";
import {Profile} from "../Example/Profile";
import {ExampleSettingsProps} from "./ExampleSettingsProps";
import React, {ReactElement} from "react";
import css from "./OperationSettings.module.css";
import {isEqual} from "../ObjectManipulator";
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
                onChange={this.changeRadioHandler.bind(this, profile)}/>
            {profile.name}
        </label>
    )
})


function changeRadioHandler(profile: Profile): void {
    const exampleSettings = this.state.exampleSettings
    copyValues(exampleSettings, profile.exampleSettings)
    this.setState({
        exampleSettings: exampleSettings
    })
}
