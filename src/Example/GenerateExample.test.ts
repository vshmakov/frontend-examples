import {AddGenerator} from "./AddGenerator";
import {ExampleGenerator} from "./ExampleGenerator";
import {CoefficientGenerator} from "./CoefficientGenerator";
import {OperationGeneratorCollection} from "./OperationGeneratorCollection";
import {Operation} from "./Operation";
import {Task} from "../Task/Task";
import {ExampleRepository} from "./ExampleRepository";

test('Generates an example', (): void => {
    const addGenerator = new AddGenerator()
    const operationGeneratorCollection = new OperationGeneratorCollection([
        addGenerator
    ])
    const coefficientGenerator = new CoefficientGenerator()
    const exampleRepository = new ExampleRepository()
    const exampleGenerator = new ExampleGenerator(
        operationGeneratorCollection,
        coefficientGenerator,
        exampleRepository
    )
    const results = {}
    const attempts = 10 ** 3
    const task = new Task({
        examplesCount: attempts,
        operations: [Operation.Add],
        addSettings: {
            minValue: 1,
            maxValue: 9,
            minResult: 2,
            maxResult: 10,
        }
    })

    for (let number = 1; number <= attempts; number++) {
        const example = exampleGenerator.generate(task)
        example.answer = example.solution
        task.examples.push(example)
        exampleRepository.addSolvedExample(example)
        const key = example.solution.toString()

        if (!Object.keys(results).includes(key)) {
            results[key] = 0
        }

        results[key]++
    }

    for (let key in results) {
        results[key] = Math.round(results[key] / attempts * 100)
    }

        const probability = Object.values(results)
    expect(Math.max.apply(null, probability) / Math.min.apply(null, probability)).toBeLessThan(5)
});
