import React from "react";
import {Task} from "./Task";

interface Props {
    task: Task
    startNewTask: () => void
}

export class TaskResult extends React.Component<Props> {
    render() {
        const task = this.props.task

        return (
            <div>
                <h1>Task result</h1>
                <ul>
                    <li>Solved examples count: {task.solvedExamplesCount}</li>
                    <li>Errors count: {task.wrongExamplesCount}</li>
                </ul>
                <div>
                    <button onClick={this.props.startNewTask}>Start new task</button>
                </div>
                <h2>Examples</h2>
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Example</th>
                        <th>Answer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.showExamples(task)}
                    </tbody>
                </table>
            </div>
        )
    }

    private showExamples(task: Task) {
        const examples = []
        let number = 1

        for (let example of task.examples) {
            examples.push(
                <tr>
                    <td>{number}</td>
                    <td>{example.string}</td>
                    <td>{example.answer}</td>
                </tr>
            )

            if (example.isSolved) {
                number++
            }
        }

        return examples
    }
}
