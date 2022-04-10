import React from "react";
import {ExampleSettings} from "../Example/ExampleSettings";
import {observer} from "mobx-react";
import {ExampleSettingsProps} from "./ExampleSettingsProps";
import {IsDisabledProps} from "./IsDisabledProps";
import {setInputValue} from "./SetInputValue";

export const SettingInput = observer(({
                                          name,
                                          exampleSettings,
                                          isDisabled
                                      }: { name: keyof ExampleSettings } & ExampleSettingsProps & IsDisabledProps) => {
    return (
        <input
            className='input_text'
            type="number"
            value={exampleSettings[name].toString()}
            onChange={setInputValue((value: string): void => {
                exampleSettings[name] = +value
            })}
            disabled={isDisabled}/>
    );
})
