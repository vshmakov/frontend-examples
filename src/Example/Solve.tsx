import {Example} from "./Example";
import React from "react";
import {TaskResult} from "../Task/TaskResult";
import {TaskProvider} from "../Task/TaskProvider";
import {ExampleProvider} from "./ExampleProvider";
import {Task} from "../Task/Task";
import {TaskConfig} from "../Task/TaskConfig";
import {TaskSettingsProvider} from "../Task/TaskSettingsProvider";

interface Props {
    taskSettingsProvider: TaskSettingsProvider
    taskProvider: TaskProvider
    exampleProvider: ExampleProvider
}

interface State {
    example: Example
    answer: string
    showTaskHistory: boolean
    showTaskConfig: boolean
}

export class Solve extends React.Component<Props, State> {
    public readonly state: State = {
        example: this.getActualOrNewExample(),
        answer: '',
        showTaskHistory: false,
        showTaskConfig: false,
    }

    public render() {
        if (this.state.showTaskConfig) {
            return <TaskConfig startNewTask={this.startNewTask.bind(this)} taskSettingsProvider={this.props.taskSettingsProvider}/>
        }

        const task = this.getCurrentOrNewTask()

        if (this.state.showTaskHistory) {
            return <TaskResult task={task} startNewTask={this.startNewTask.bind(this)}/>
        }

                return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <h1>Example #{task.rightExamplesCount} from {task.taskSettings.examplesCount}</h1>
                    <span>{this.state.example.string} = </span>
                    <input
                        type="text"
                        value={this.state.answer}
                        onChange={this.changeHandler.bind(this)}/>
                    <button type="submit">Answer</button>
                </form>
                <div>
                    <button onClick={this.clickHandler.bind(this)}>Change settings</button>
                </div>
            </div>
        )
    }

    private startNewTask(): void {
        this.props.taskProvider.cleanCurrentTask()
        this.setState({
            example: this.getActualOrNewExample(),
            showTaskHistory: false,
            showTaskConfig: false
        })
    }

    private clickHandler(): void {
        this.setState({
            showTaskConfig: true
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

        if (this.getCurrentOrNewTask().isSolved) {
            this.setState({
                showTaskHistory: true
            })

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
