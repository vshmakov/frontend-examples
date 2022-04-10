import css from "./OperationSettings.module.css";
import React, {ReactElement} from "react";

export function OpenSettingsSvg({isSettingsOpened}: { isSettingsOpened: boolean }): ReactElement {
    return (
        <svg className={css.settings_arrow} xmlns="http://www.w3.org/2000/svg" width="17.762" height="10.295"
             viewBox="0 0 17.762 10.295">
            <g id="Сгруппировать_8" data-name="Сгруппировать 8"
               transform="translate(-497.153 -854.352)">
                <line id="Линия_19" data-name="Линия 19" x2="7.467" y2="7.467"
                      transform="translate(513.5 863.233) rotate(180)" fill="none"
                      stroke={!isSettingsOpened ? "#fff" : "#395273"} strokeLinecap="round"
                      strokeWidth="2"/>
                <line id="Линия_20" data-name="Линия 20" x1="7.467" y2="7.467"
                      transform="translate(506.034 863.233) rotate(180)" fill="none"
                      stroke={!isSettingsOpened ? "#fff" : "#395273"} strokeLinecap="round"
                      strokeWidth="2"/>
            </g>
        </svg>
    )
}
