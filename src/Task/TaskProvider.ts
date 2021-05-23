import {Task} from "./Task";
import {TaskSettingsProvider} from "./TaskSettingsProvider";

export class TaskProvider {
    private currentTask: Task | null = null

    public constructor(private readonly taskSettingsProvider: TaskSettingsProvider) {
    }

    public getCurrentOrNewTask(): Task {
        if (null == this.currentTask) {
            this.currentTask = new Task(
                this.taskSettingsProvider.getCurrentSettings()
            )
        }

        return this.currentTask
    }

    public cleanCurrentTask(): void {
        this.currentTask = null
    }
}
