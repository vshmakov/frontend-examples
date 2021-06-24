import {Example} from "./Example";
import {Operation} from "./Operation";

const solvedExamplesKey = 'solved-examples'
const examplesLimit = 50

export class ExampleRepository {
    public get solvedExamples(): Example[] {
        const item = localStorage.getItem(solvedExamplesKey)

        if (null === item) {
            return []
        }

        type ExampleValue={ first: number, operation: Operation, second: number }
        const exampleValues: ExampleValue[] = JSON.parse(item)

        return exampleValues.map((exampleValue:ExampleValue):Example=>new Example(exampleValue.first, exampleValue.operation, exampleValue.second))
    }

    public addSolvedExample(example: Example): void {
        let solvedExamples = this.solvedExamples
        solvedExamples.push(example)
        solvedExamples = solvedExamples.slice(-examplesLimit)
        localStorage.setItem(solvedExamplesKey, JSON.stringify(solvedExamples))
    }
}
