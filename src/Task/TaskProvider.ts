import {ProfileProvider} from "../Profile/ProfileProvider";
import {Task} from "./Task";

export class TaskProvider {
    private currentTask: Task | null = null

    public constructor(private readonly profileProvider: ProfileProvider) {
    }

    public getCurrentOrNewTask(): Task {
        if (null == this.currentTask) {
            this.currentTask = new Task(
                this.profileProvider.getCurrentProfile()
            )
        }

        return this.currentTask
    }

    public cleanCurrentTask(): void {
        this.currentTask = null
    }
}
