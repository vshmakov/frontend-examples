import {ExampleSettings} from "../Example/ExampleSettings";
import {TaskSettings} from "./TaskSettings";
import {getValueBetween, getValueLessThan} from "../Example/NumberManipulator";

export class TaskSettingsManager {
    private readonly storageKey = 'task-settings';

    public getCurrentSettings(): TaskSettings {
        const item = localStorage.getItem(this.storageKey)

        if (null === item) {
            const exampleSettings = new ExampleSettings(1, 9, 1, 10)
            const defaultTaskSettings = new TaskSettings(20, exampleSettings)

            return defaultTaskSettings
        }

        const taskSettings = JSON.parse(item)

        return taskSettings
    }

    public saveTaskSettings(taskSettings: TaskSettings): void {
        this.normalize(taskSettings)
        localStorage.setItem(this.storageKey, JSON.stringify(taskSettings))
    }

    private normalize(taskSettings: TaskSettings): void {
        if (taskSettings.examplesCount < 1) {
            taskSettings.examplesCount = 1
        }

        const addSettings = taskSettings.addSettings

        addSettings.minValue = getValueLessThan(addSettings.minValue, addSettings.maxValue)
        addSettings.minResult = getValueBetween(addSettings.minResult, addSettings.minValue * 2, addSettings.minValue + addSettings.maxValue)
        addSettings.maxResult = getValueBetween(addSettings.maxResult, addSettings.minValue + addSettings.maxValue, addSettings.maxValue * 2)
    }
}
