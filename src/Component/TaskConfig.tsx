import React, {ReactElement, useState} from "react";
import {StartNewTaskButton} from "./StartNewTaskButton";
import {OperationSettings} from "./OperationSettings";
import {Operation} from "../Example/Operation";
import {AppStateProps} from "./AppStateProps";
import {observer} from "mobx-react";
import {setInputValue} from "./SetInputValue";
import {runInAction} from "mobx";

export const TaskConfig = observer(({appState}: AppStateProps): ReactElement => {
    const taskSettings = appState.taskSettings
    const [examplesCount, setExamplesCount]=useState(taskSettings.examplesCount.toString())

    return (
        <div className='wrap'>
            <div className='header'>
                <h1>Настройки задания</h1>
                <StartNewTaskButton onClick={(): void => {
                    appState.taskSettingsManager.saveTaskSettings(taskSettings)
                    appState.startNewTask()
                }}/>
            </div>
            <div className="container">
                Количество примеров:
                <div>
                    <input
                        className='input_text'
                        type="number"
                        value={examplesCount}
                        onChange={setInputValue((count: string): void => runInAction((): void => {
                            taskSettings.examplesCount = +count
                            setExamplesCount(count)
                        }))}/>
                </div>
                <label>
                    Добавлять 5 примеров при ошибке
                    <input
                        type="checkbox"
                        checked={taskSettings.addExamplesOnError}
                        onChange={(): void => {
                            taskSettings.addExamplesOnError = !taskSettings.addExamplesOnError
                        }}/>
                </label>
                <OperationSettings
                    baseOperation={Operation.Add}
                    taskSettings={taskSettings}
                    exampleSettings={taskSettings.addSettings}
                    profiles={appState.profileProvider.addProfiles}/>
                <OperationSettings
                    baseOperation={Operation.Mult}
                    taskSettings={taskSettings}
                    exampleSettings={taskSettings.multSettings}
                    profiles={appState.profileProvider.multProfiles}/>
            </div>
        </div>
    )
})
