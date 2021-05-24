import {Task} from "./Task";
import {TaskSettingsManager} from "./TaskSettingsManager";

export class TaskProvider {
    private currentTask: Task | null = null

    public constructor(private readonly taskSettingsManager: TaskSettingsManager) {
    }

    public getCurrentOrNewTask(): Task {
        if (null == this.currentTask) {
            this.currentTask = new Task(
                this.taskSettingsManager.getCurrentSettings()
            )
        }

        return this.currentTask
    }

    public cleanCurrentTask(): void {
        this.currentTask = null
    }
}
