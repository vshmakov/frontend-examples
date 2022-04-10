import {ExampleRow} from "./ExampleRow";
import React, {ReactElement} from "react";

export function getExampleRows(task: Task): ReactElement[] {
    const examples = []
    let number = 1

    for (let example of task.examples) {
        examples.push(
            <ExampleRow example={example} number={number}/>
        )

        if (example.isSolved) {
            number++
        }
    }

    return examples
}
