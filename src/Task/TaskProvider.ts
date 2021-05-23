import {Task} from "./Task";
import {TaskSettings} from './TaskSettings'
import {ExampleSettings} from '../Example/ExampleSettings'

export class TaskProvider {
    private currentTask: Task | null = null

    public getCurrentOrNewTask(): Task {
        if (null == this.currentTask) {
            this.currentTask = new Task(
                new TaskSettings(20, new ExampleSettings(1, 9, 1, 10))
            )
        }

        return this.currentTask
    }

    public cleanCurrentTask(): void {
        this.currentTask = null
    }
}
