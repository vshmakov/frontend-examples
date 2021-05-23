import {Example} from "./Example";
import {Task} from "../Task/Task";

export class CoefficientGenerator {
    public getUniqueCoefficient(example: Example, task: Task): number {
        let uniqueCoefficient = 1
        const solvedExamples = task.solvedExamples
        const solvedExamplesCount = solvedExamples.length || 1

        for (let solvedExample of solvedExamples) {
            if (example.first === solvedExample.first && example.operation === solvedExample.operation && example.second === solvedExample.second) {
                uniqueCoefficient -= 60 / 100 / solvedExamplesCount
            }

            if (example.solution === solvedExample.solution) {
                uniqueCoefficient -= 40 / 100 / solvedExamplesCount
            }
        }

        return uniqueCoefficient
    }
}
