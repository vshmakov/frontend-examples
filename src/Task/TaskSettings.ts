import {ExampleSettings} from "../Example/ExampleSettings";
import {Operation} from "../Example/Operation";

export class TaskSettings {
    public addExamplesOnError: boolean = false

    public constructor(
        public examplesCount: number,
        public operations: Operation[],
        public readonly addSettings: ExampleSettings,
        public readonly multSettings: ExampleSettings,
    ) {
    }
}
