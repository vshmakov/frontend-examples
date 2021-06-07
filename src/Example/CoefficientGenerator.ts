import {Example} from "./Example";
import {Task} from "../Task/Task";
import {isEqual} from "../ObjectManipulator";

export class CoefficientGenerator {
    public getUniqueCoefficient(example: Example, task: Task): number {
        let uniqueCoefficient = 1
        const solvedExamples = task.solvedExamples
        const solvedExamplesCount = solvedExamples.length || 1
        const keys: (keyof Example)[] = ['first', 'operation', 'second']

        for (let solvedExample of solvedExamples) {
            const isEqualExample = keys.every((key: keyof Example): boolean => example[key] === solvedExample[key])

            if (isEqualExample) {
                uniqueCoefficient -= 60 / 100 / solvedExamplesCount
            }

            if (example.solution === solvedExample.solution) {
                uniqueCoefficient -= 40 / 100 / solvedExamplesCount
            }
        }

        return uniqueCoefficient
    }
}
