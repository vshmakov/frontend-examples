import {Example} from "../Example/Example";
import React from "react";
import {TaskProvider} from "../Task/TaskProvider";
import {ExampleProvider} from "../Example/ExampleProvider";
import {Task} from "../Task/Task";

interface Props {
    taskProvider: TaskProvider
    exampleProvider: ExampleProvider
    openConfiguration: () => void
    openTaskResult: () => void
}

interface State {
    example: Example
    answer: string
}

export class Solve extends React.Component<Props, State> {
    public readonly state: State = {
        example: this.getActualOrNewExample(),
        answer: '',
    }

    public render() {
        const task = this.getCurrentOrNewTask()

        return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <h1>Пример №{task.currentExampleNumber} из {task.taskSettings.examplesCount}</h1>
                    <span>{this.state.example.string} = </span>
                    <input
                        type="text"
                        value={this.state.answer}
                        onChange={this.changeHandler.bind(this)}/>
                    <button type="submit">Ответить</button>
                </form>
                <div>
                    <button onClick={this.props.openConfiguration}>
                        Изменить настройки
                    </button>
                </div>
            </div>
        )
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

        if (this.getCurrentOrNewTask().isSolved) {
            this.props.openTaskResult()

            return
        }

        this.setState({
            example: this.getActualOrNewExample()
        })
    }

    private getCurrentOrNewTask(): Task {
        return this.props.taskProvider.getCurrentOrNewTask();
    }

    private getActualOrNewExample(): Example {
        return this.props.exampleProvider.getActualOrNewExample(this.getCurrentOrNewTask())
    }
}
