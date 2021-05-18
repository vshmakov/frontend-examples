import {Profile} from "./Profile"
import {Example} from "./Example";

export class Attempt {
    private readonly examples: Example[] = []

    public constructor(
        private readonly profile: Profile
    ) {
    }

    public addExample(example: Example): void {
        this.examples.push(example)
    }

    public get examplesCount(): number {
        return this.examples.length
    }
}
