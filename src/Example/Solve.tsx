import {Example} from "./Example";
import React from "react";
import {exampleProvider, taskProvider} from "../container";

interface SolveState {
    example: Example
    answer: string
}

export class Solve extends React.Component<{}, SolveState> {
    public readonly state: SolveState = {
        example: exampleProvider.getActualOrNewExample(taskProvider.getCurrentOrNewTask()),
        answer: '',
    }

    public render() {
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
                    <li>Errors count: {currentTask.wrongExamplesCount}</li>
                    <li>Remained examples count: {currentTask.remainedExamplesCount}</li>
                </ul>
            </div>
        )
            ;
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
            taskProvider.cleanCurrentTask()
        }

        this.setState({
            example: exampleProvider.getActualOrNewExample(taskProvider.getCurrentOrNewTask())
        })
    }
}
