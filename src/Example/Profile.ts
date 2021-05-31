import {ExampleSettings} from "./ExampleSettings";

export class Profile {
    public constructor(
        public readonly name: string,
        public readonly exampleSettings: ExampleSettings,
    ) {
    }
}
