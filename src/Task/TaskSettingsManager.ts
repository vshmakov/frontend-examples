import {TaskSettings} from "./TaskSettings";
import {Operation} from "../Example/Operation";
import {TaskSettingsNormalizer} from "./TaskSettingsNormalizer";
import {ProfileProvider} from "../Example/ProfileProvider";

const storageKey = 'task-settings-v2';

export class TaskSettingsManager {
    public constructor(
        private readonly taskSettingsNormalizer: TaskSettingsNormalizer,
        private readonly profileProvider: ProfileProvider
    ) {
    }

    public getCurrentSettings(): TaskSettings {
        const item = localStorage.getItem(storageKey)

        if (null === item) {
            return {
                examplesCount: 20,
                addExamplesOnError: false,
                operations: [Operation.Add],
                addSettings: this.profileProvider.defaultAddProfile.exampleSettings,
                multSettings: this.profileProvider.defaultMultProfile.exampleSettings
            }
        }

        const taskSettings = JSON.parse(item)

        return taskSettings
    }

    public saveTaskSettings(taskSettings: TaskSettings): void {
        this.taskSettingsNormalizer.normalize(taskSettings)
        localStorage.setItem(storageKey, JSON.stringify(taskSettings))
    }
}
