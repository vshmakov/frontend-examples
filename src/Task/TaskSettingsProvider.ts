import {ExampleSettings} from "../Example/ExampleSettings";
import {TaskSettings} from "./TaskSettings";

export class TaskSettingsProvider {
    public getCurrentSettings(): TaskSettings {
        return new TaskSettings(20, new ExampleSettings(1, 9, 1, 10))
    }
}
