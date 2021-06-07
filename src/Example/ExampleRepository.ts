import {Example} from "./Example";

const solvedExamplesKey = 'solved-examples'
const examplesLimit = 50

export class ExampleRepository {
    public get solvedExamples(): Example[] {
        const item = localStorage.getItem(solvedExamplesKey)

        if (null === item) {
            return []
        }

        return JSON.parse(item)
    }

    public addSolvedExample(example: Example): void {
        let solvedExamples = this.solvedExamples
        solvedExamples.push(example)
        solvedExamples = solvedExamples.slice(-examplesLimit)
        localStorage.setItem(solvedExamplesKey, JSON.stringify(solvedExamples))
    }
}
