import React from "react";
import {taskProvider} from "../container";
import {Task} from "./Task";

interface Props {
    startNewTask: () => void
}

export class TaskResult extends React.Component<Props> {
    render() {
        const currentTask = taskProvider.getCurrentOrNewTask()

        return (
            <div>
                <h1>Task result</h1>
                <ul>
                    <li>Solved examples count: {currentTask.solvedExamplesCount}</li>
                    <li>Errors count: {currentTask.wrongExamplesCount}</li>
                </ul>
                <div>
                    <button onClick={this.clickHandler.bind(this)}>Start new task</button>
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
                    {this.showExamples(currentTask)}
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

    private clickHandler(): void {
        taskProvider.cleanCurrentTask()
        this.props.startNewTask()
    }
}
