import {Example} from "./Example";
import {Operation} from "./Operation";
import {ExampleValues} from "./ExampleValues";
import {random, randomFlag} from "../Random";
import {ExampleSettings} from "./ExampleSettings";
import {Task} from "../Task/Task";
import {CoefficientGenerator} from "./CoefficientGenerator";

export class ExampleGenerator {
    public constructor(private readonly coefficientGenerator: CoefficientGenerator) {
    }

    public generate(task: Task): Example {
        let example = Example.createFromValues(this.add(task.taskSettings.exampleSettings), Operation.Add)

        if (randomFlag(15)) {
            return example
        }

        let maxCoefficient = 0

        for (let number = 1; number <= 10; number++) {
            const nextExample = Example.createFromValues(this.add(task.taskSettings.exampleSettings), Operation.Add)
            const nextCoefficient = this.coefficientGenerator.getUniqueCoefficient(nextExample, task)

            if (nextCoefficient > maxCoefficient) {
                example = nextExample
                maxCoefficient = nextCoefficient
            }
        }

        return example
    }

    private add(settings: ExampleSettings): ExampleValues {
        const first = random(settings.minValue, settings.maxValue)
        const minSecond = this.getValueBetween(settings.minValue, settings.minResult - first, settings.minValue)
        const maxSecond = this.getValueBetween(settings.maxValue, minSecond, settings.maxResult - first)
        const second = random(minSecond, maxSecond)

        return randomFlag(60) ? new ExampleValues(first, second) : new ExampleValues(second, first)
    }

    private getValueBetween(value: number, min: number, max: number): number {
        if (min > max) {
            throw new DOMException(`${min} is greater than ${max}`)
        }

        if (value < min) {
            return min
        }

        if (value > max) {
            return max
        }

        return value
    }
}
