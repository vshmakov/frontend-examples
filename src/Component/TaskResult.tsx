import React, {ReactElement} from "react";
import {StartNewTaskButton} from "./StartNewTaskButton";
import css from './TaskResult.module.css';
import {AppStateProps} from "./AppStateProps";
import {observer} from "mobx-react";
import {getExampleRows} from "./GetExampleRows";

export const TaskResult = observer(({appState}: AppStateProps): ReactElement => {
    const task = appState.task

    return (
        <div className='wrap'>
            <div className='header'>
                <h1>Результаты задания</h1>
                <StartNewTaskButton onClick={(): void => appState.startNewTask()}/>
            </div>
            <div className="container">
                <ul>
                    <li>Решено примеров: {task.solvedExamplesCount}</li>
                    <li>Ошибок: {task.wrongExamplesCount}</li>
                    <li>{appState.ratingGenerator.getRating(task)}</li>
                </ul>
                <h2>Примеры</h2>
                <table className={css.result_table}>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Пример</th>
                        <th>Ответ</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getExampleRows(task)}
                    </tbody>
                </table>
            </div>
        </div>
    )
})
