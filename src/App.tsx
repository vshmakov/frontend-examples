import React from 'react';
import {Example} from "./Example/Example";
import {exampleGenerator, taskProvider} from "./container";
import {Task} from "./Task/Task";

interface AppState {
    example: Example
    answer: string
}

class App extends React.Component<{}, AppState> {
    private task: Task = taskProvider.getNewTask()
    public readonly state: AppState = {
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
                    <li>Profile: {this.task.profile.name}</li>
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

export default App;
