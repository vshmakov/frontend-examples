import React, {ReactElement, useState} from "react";
import css from './Solve.module.css';
import {AnswerButtonSvg} from "./AnswerButtonSvg";
import {AppStateProps} from "./AppStateProps";
import {observer} from "mobx-react";
import {TaskSettingsButtonSvg} from "./TaskSettingsButtonSvg";
import {getAnswerResultClass} from "./GetAnswerResultClass";

export const Solve = observer(({appState}: AppStateProps): ReactElement => {
    const [answer, setAnswer] = useState('')
    const {task, example, isRight} = appState

    return (
        <div className='wrap'>
            <div className='header'>
                <h1>Задание</h1>
                <button title="Настройки" onClick={(): void => appState.openPage(Page.TaskConfig)}>
                    <TaskSettingsButtonSvg/>
                </button>
            </div>
            <div className='container'>
                <form onSubmit={preventDefault((): void => {
                    appState.answer(+answer)
                    setAnswer('')
                })}>
                    <div className={css.name}>
                        <h2>Пример №{task.currentExampleNumber} из {task.taskSettings.examplesCount}</h2>
                    </div>
                    <div className={css.state_example_string}>{example.string} =</div>
                    <div className={css.answer_input_answer_wrap}>
                        <input
                            className={css.input_text + ' input_text'}
                            type="text"
                            value={answer}
                            onChange={setInputValue(setAnswer)}
                            required={true}/>
                        <button
                            className={`${css.answer_btn_agree} ${getAnswerResultClass(isRight)}`}
                            type="submit"
                            title="Ответить">
                            <AnswerButtonSvg/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
})
