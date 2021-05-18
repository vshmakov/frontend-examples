import {ProfileProvider} from "../Profile/ProfileProvider";
import {Task} from "./Task";

export class TaskProvider {
    public constructor(private readonly profileProvider: ProfileProvider) {
    }

    public getNewTask(): Task {
        return new Task(
            this.profileProvider.getCurrentProfile()
        )
    }
}
