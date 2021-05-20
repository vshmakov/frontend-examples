import {OperationSetting} from "./OperationSetting";

export class Profile {
    public constructor(
        public readonly name: string,
        public readonly examplesCount: number,
        public readonly addSetting: OperationSetting
    ) {
    }
}
