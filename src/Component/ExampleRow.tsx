import {observer} from "mobx-react";
import React, {ReactElement} from "react";
import css from "./TaskResult.module.css";

export const ExampleRow = observer(({example, number}: { example: Example, number: number }): ReactElement => {
    return (
        <tr className={example.isSolved ? css.right_answer : css.wrong_answer}>
            <td>{number}</td>
            <td>{example.string}</td>
            <td>{example.answer}</td>
        </tr>
    )
})
