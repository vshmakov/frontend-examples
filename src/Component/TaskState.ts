import {makeAutoObservable} from "mobx";

export class TaskState {
    public constructor() {
        makeAutoObservable(this)
    }
}
