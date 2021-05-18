import {Example} from "./Example";
import React from "react";
import {Task} from "../Task/Task";
import {exampleGenerator, taskProvider} from "../container";
import {Link} from "react-router-dom";

interface SolveState {
    example: Example
    answer: string
}

export class Solve extends React.Component<{}, SolveState> {
    private task: Task = taskProvider.getNewTask()
    public readonly state: SolveState = {
        example: exampleGenerator.generate(this.task),
        answer: '',
    }

    public render() {
        return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <h1>Example #{this.task.examplesCount}</h1>
                    <span>{this.state.example.string} = </span>
                    <input
                        type="text"
                        value={this.state.answer}
                        onChange={this.changeHandler.bind(this)}/>
                    <button type="submit">Answer</button>
                </form>
                <ul>
                    <li>
                        <div>Profile: {this.task.profile.name}</div>
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

        if (!this.state.example.isRight(+answer)) {
            return;
        }

        if (this.task.isFinished) {
            this.task = taskProvider.getNewTask()
        }

        this.setState({
            example: exampleGenerator.generate(this.task)
        })
    }
}
