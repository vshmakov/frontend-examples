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

    public get rightExamplesCount(): number {
        return this.solvedExamplesCount + this.examples
            .filter((example: Example): boolean => !example.hasAnswer)
            .length
    }

    public get wrongExamplesCount(): number {
        return this.examples
            .filter((example: Example): boolean => example.hasAnswer && !example.isSolved)
            .length
    }

    public get solvedExamplesCount(): number {
        return this.examples
            .filter((example: Example): boolean => example.isSolved)
            .length
    }

    public get remainedExamplesCount(): number {
        return this.profile.examplesCount - this.solvedExamplesCount
    }

    public get isSolved(): boolean {
        return 0 === this.remainedExamplesCount
    }

    public get lastExample(): Example | null {
        const length = this.examples.length

        if (0 === length) {
            return null
        }

        return this.examples[length - 1]
    }
}
