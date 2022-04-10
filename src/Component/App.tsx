import React, {ReactElement} from 'react';
import {Solve} from "./Solve";
import {TaskResult} from "./TaskResult";
import {TaskConfig} from "./TaskConfig";
import {observer} from "mobx-react";
import {AppStateProps} from "./AppStateProps";
import {Page} from "./Page";

export const App = observer(({appState}: AppStateProps): ReactElement => {
        const router = {
            [Page.Solve]: <Solve appState={appState}/>,
            [Page.TaskResult]: <TaskResult appState={appState}/>,
            [Page.TaskConfig]: <TaskConfig appState={appState}/>,
        }

        return (
            <div>
                {router[appState.page]}
            </div>
        )
    }
)
