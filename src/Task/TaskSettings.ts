import {ExampleSettings} from "../Example/ExampleSettings";

export class TaskSettings {
    public constructor(
        public readonly examplesCount: number,
        public readonly exampleSettings: ExampleSettings
    ) {
    }
}
