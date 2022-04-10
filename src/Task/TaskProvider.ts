import {Task} from "./Task";
import {TaskSettings} from "./TaskSettings";

export class TaskProvider {
    private currentTask: Task | null = null

    public getCurrentOrNewTask(taskSettings: TaskSettings): Task {
        if (null == this.currentTask) {
            this.currentTask = new Task(taskSettings)
        }

        return this.currentTask
    }

    public cleanCurrentTask(): void {
        this.currentTask = null
    }
}
