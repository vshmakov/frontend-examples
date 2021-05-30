import React from "react";
import {Task} from "./Task";
import {RatingGenerator} from "./RatingGenerator";
import {StartNewTaskButton} from "./StartNewTaskButton";

interface Props {
    ratingGenerator:RatingGenerator
    task: Task
    startNewTask: () => void
}

export class TaskResult extends React.Component<Props> {
    render() {
        const task = this.props.task

        return (
            <div>
                <div>
                    <StartNewTaskButton onClick={this.props.startNewTask}/>
                </div>
                <h1>Результаты задания</h1>
                <ul>
                    <li>Решено примеров: {task.solvedExamplesCount}</li>
                    <li>Ошибок: {task.wrongExamplesCount}</li>
                    <li>Оценка: {this.props.ratingGenerator.getRating(task)}</li>
                </ul>
                <h2>Примеры</h2>
                <table>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Пример</th>
                        <th>Ответ</th>
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
