import {Example} from "./Example";
import React from "react";
import {exampleGenerator, taskProvider} from "../container";
import {Link} from "react-router-dom";

interface SolveState {
    example: Example
    answer: string
}

export class Solve extends React.Component<{}, SolveState> {
    public readonly state: SolveState = {
        example: exampleGenerator.generate(taskProvider.getCurrentOrNewTask()),
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
                    <li>
                        <div>Profile: {currentTask.profile.name}</div>
                        <div>
                            <Link role="button" to="/profiles">Change</Link>
                        </div>
                    </li>
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

        if (taskProvider.getCurrentOrNewTask().isFinished) {
            taskProvider.cleanCurrentTask()
        }

        this.setState({
            example: exampleGenerator.generate(taskProvider.getCurrentOrNewTask())
        })
    }
}
