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
        const operation = this.getOperation(task)
        const generator = this.operationGeneratorCollection.getGenerator(operation)
        const taskSettings = task.taskSettings
        const exampleSettings = [Operation.Add, Operation.Sub].includes(operation) ? taskSettings.addSettings : taskSettings.multSettings
        let example = generator.generate(exampleSettings)
        const needUniqueExample = randomFlag(85)
        const needMaximumAmplitude = randomFlag(40)
        let maxCoefficient = 0

        for (let number = 1; number <= 10; number++) {
            const nextExample = generator.generate(exampleSettings)
            let exampleCoefficient = 0

            if (needUniqueExample) {
                exampleCoefficient += this.coefficientGenerator.getUniqueCoefficient(nextExample, task)
            }

            if (needMaximumAmplitude) {
                exampleCoefficient += this.coefficientGenerator.getAmplitudeCoefficient(nextExample, exampleSettings)
            }

            if (exampleCoefficient > maxCoefficient) {
                example = nextExample
                maxCoefficient = exampleCoefficient
            }
        }

        return example
    }

    private getOperation(task: Task): Operation {
        const operations = task.taskSettings.operations

        return operations[random(0, operations.length - 1)]
    }
}
