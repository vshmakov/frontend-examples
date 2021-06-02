import {TaskSettings} from "./TaskSettings";
import {Operation} from "../Example/Operation";
import {ExampleSettingsNormalizer} from "../Example/ExampleSettingsNormalizer";

export class TaskSettingsNormalizer {
    public constructor(private readonly exampleSettingsNormalizer: ExampleSettingsNormalizer) {
    }

    public normalize(taskSettings: TaskSettings): void {
        if (taskSettings.examplesCount < 1) {
            taskSettings.examplesCount = 10
        }

        if (0 === taskSettings.operations.length) {
            taskSettings.operations.push(Operation.Add)
        }

        this.exampleSettingsNormalizer.normalizeAddSettings(taskSettings.addSettings)
        this.exampleSettingsNormalizer.normalizeMultSettings(taskSettings.multSettings)
    }
}
