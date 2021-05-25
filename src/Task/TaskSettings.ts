import {ExampleSettings} from "../Example/ExampleSettings";

export class TaskSettings {
    public constructor(
        public examplesCount: number,
        public readonly addSettings: ExampleSettings
    ) {
    }
}
