import {Profile} from "../Profile/Profile"
import {Example} from "../Example/Example";

export class Task {
    private readonly examples: Example[] = []

    public constructor(
        public readonly profile: Profile
    ) {
    }

    public addExample(example: Example): void {
        this.examples.push(example)
    }

    public get examplesCount(): number {
        return this.examples.length
    }

    public get isFinished(): boolean {
        return this.examplesCount === this.profile.examplesCount
    }
}
