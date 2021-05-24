import {ExampleSettings} from "../Example/ExampleSettings";
import {TaskSettings} from "./TaskSettings";

enum StorageKey {
    ExamplesCount = 'examples_count'
}

export class TaskSettingsManager {
    public getCurrentSettings(): TaskSettings {
        const item = localStorage.getItem(StorageKey.ExamplesCount)
        const examplesCount = null !== item ? +item : 20

        return new TaskSettings(examplesCount, new ExampleSettings(1, 9, 1, 10))
    }

    public setExamplesCount(count: number): void {
        localStorage.setItem(StorageKey.ExamplesCount, count.toString())
    }
}
