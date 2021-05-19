import {Example} from "./Example";
import React from "react";
import {exampleProvider, taskProvider} from "../container";
import {TaskResult} from "../Task/TaskResult";

interface State {
    example: Example
    answer: string
    showTaskHistory: boolean
}

export class Solve extends React.Component<{}, State> {
    public readonly state: State = {
        example: exampleProvider.getActualOrNewExample(taskProvider.getCurrentOrNewTask()),
        answer: '',
        showTaskHistory: false,
    }

    public render() {
        if (this.state.showTaskHistory) {
            return <TaskResult startNewTask={this.startNewTask.bind(this)}/>
        }

        const currentTask = taskProvider.getCurrentOrNewTask()

        return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <h1>Example #{currentTask.rightExamplesCount}</h1>
                    <span>{this.state.example.string} = </span>
                    <input
                        type="text"
                        value={this.state.answer}
                        onChange={this.changeHandler.bind(this)}/>
                    <button type="submit">Answer</button>
                </form>
                <ul>
                    <li>Remained examples count: {currentTask.remainedExamplesCount}</li>
                </ul>
            </div>
        )
            ;
    }

    private startNewTask(): void {
        this.setState({
            example: exampleProvider.getActualOrNewExample(taskProvider.getCurrentOrNewTask()),
            showTaskHistory: false,
        })
    }

    private changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            answer: event.target.value
        })
    }

    private submitHandler(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        const answer = this.state.answer;

        if ('' === answer) {
            return
        }

        this.setState({
            answer: ''
        })

        const example = this.state.example;
        example.answer = +answer

        if (taskProvider.getCurrentOrNewTask().isSolved) {
            this.setState({
                showTaskHistory: true
            })

            return
        }

        this.setState({
            example: exampleProvider.getActualOrNewExample(taskProvider.getCurrentOrNewTask())
        })
    }
}
