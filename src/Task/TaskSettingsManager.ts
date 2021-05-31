import {ExampleSettings} from "../Example/ExampleSettings";
import {TaskSettings} from "./TaskSettings";
import {getValueBetween, getValueLessThan} from "../Example/NumberManipulator";
import {Operation} from "../Example/Operation";

const storageKey = 'task-settings-v1';

export class TaskSettingsManager {
    public getCurrentSettings(): TaskSettings {
        const item = localStorage.getItem(storageKey)

        if (null === item) {
            const defaultTaskSettings = {
                examplesCount: 10,
                operations: [Operation.Add],
                addSettings: {
                    minValue: 1,
                    maxValue: 9,
                    minResult: 2,
                    maxResult: 10
                },
            }
this.normalize(defaultTaskSettings)

            return defaultTaskSettings
        }

        const taskSettings = JSON.parse(item)

        return taskSettings
    }

    public saveTaskSettings(taskSettings: TaskSettings): void {
        this.normalize(taskSettings)
        localStorage.setItem(storageKey, JSON.stringify(taskSettings))
    }

    private normalize(taskSettings: TaskSettings): void {
        if (taskSettings.examplesCount < 1) {
            taskSettings.examplesCount = 10
        }

        if (0 === taskSettings.operations.length) {
            taskSettings.operations.push(Operation.Add)
        }

        const addSettings = taskSettings.addSettings

        addSettings.minValue = getValueLessThan(addSettings.minValue, addSettings.maxValue)
        addSettings.minResult = getValueBetween(addSettings.minResult, addSettings.minValue * 2, addSettings.minValue + addSettings.maxValue)
        addSettings.maxResult = getValueBetween(addSettings.maxResult, addSettings.minValue + addSettings.maxValue, addSettings.maxValue * 2)
    }
}
