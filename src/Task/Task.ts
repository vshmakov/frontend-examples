import {Example} from "../Example/Example";
import {TaskSettings} from "./TaskSettings";

export class Task {
    public readonly examples: Example[] = []

    public constructor(
        public readonly taskSettings: TaskSettings
    ) {
    }

    public get currentExampleNumber(): number {
        return this.solvedExamplesCount + this.examples
            .filter((example: Example): boolean => !example.hasAnswer)
            .length
    }

    public get rightExamplesCount(): number {
        return this.solvedExamplesCount - this.wrongExamplesCount
    }

    public get wrongExamplesCount(): number {
        return this.examples
            .filter((example: Example): boolean => example.hasAnswer && !example.isSolved)
            .length
    }

    public get solvedExamplesCount(): number {
        return this.solvedExamples.length
    }

    public get solvedExamples(): Example[] {
        return this.examples
            .filter((example: Example): boolean => example.isSolved)
    }

    public get remainedExamplesCount(): number {
        return this.taskSettings.examplesCount - this.solvedExamplesCount
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
