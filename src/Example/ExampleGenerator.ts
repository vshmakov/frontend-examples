import {Example} from "./Example";
import {Operation} from "./Operation";
import {random, randomFlag} from "../Random";
import {Task} from "../Task/Task";
import {CoefficientGenerator} from "./CoefficientGenerator";
import {OperationGeneratorCollection} from "./OperationGeneratorCollection";

export class ExampleGenerator {
    public constructor(
        private readonly operationGeneratorCollection: OperationGeneratorCollection,
        private readonly coefficientGenerator: CoefficientGenerator
    ) {
    }

    public generate(task: Task): Example {
        const generator = this.operationGeneratorCollection.getGenerator(this.getOperation(task))
        const exampleSettings = task.taskSettings.addSettings
        let example = generator.generate(exampleSettings)

        if (randomFlag(15)) {
            return example
        }

        let maxCoefficient = 0

        for (let number = 1; number <= 100; number++) {
            const nextExample = generator.generate(exampleSettings)
            const nextCoefficient = this.coefficientGenerator.getUniqueCoefficient(nextExample, task)

            if (nextCoefficient > maxCoefficient) {
                example = nextExample
                maxCoefficient = nextCoefficient
            }
        }

        return example
    }

    private getOperation(task: Task): Operation {
        const operations = task.taskSettings.operations

        return operations[random(0, operations.length - 1)]
    }
}
