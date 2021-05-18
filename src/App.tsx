import React from 'react';
import {Example} from "./Example";
import {attemptProvider, exampleGenerator} from "./container";
import {Attempt} from "./Attempt";

interface AppState {
    answer: string
    example: Example
}

class App extends React.Component<{}, AppState> {
    private attempt: Attempt = attemptProvider.getCurrentOrNewAttempt()
    public readonly state: AppState = {
        example: exampleGenerator.generate(this.attempt),
        answer: '',
    }

    public render() {
        return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <h1>Example #{this.attempt.examplesCount}</h1>
                    <span>{this.state.example.string} = </span>
                    <input
                        type="text"
                        value={this.state.answer}
                        onChange={this.changeHandler.bind(this)}/>
                    <button type="submit">Answer</button>
                </form>
                <ul>
                    <li>Profile: {this.attempt.profile.name}</li>
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

        if (this.state.example.isRight(+this.state.answer)) {
            this.setState({
                example: exampleGenerator.generate(this.attempt)
            })
        }

        this.setState({
            answer: ''
        })
    }
}

export default App;
