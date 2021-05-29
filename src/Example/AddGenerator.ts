import {Operation} from "./Operation";
import {OperationGenerator} from "./OperationGenerator";
import {ExampleSettings} from "./ExampleSettings";
import {ExampleValues} from "./ExampleValues";
import {random, randomFlag} from "../Random";
import {Example} from "./Example";
import {getValueBetween} from "./NumberManipulator";

export class AddGenerator implements OperationGenerator {
    public readonly operation: Operation = Operation.Add

    public generate(exampleSettings: ExampleSettings): Example {
        return Example.createFromValues(this.generateValues(exampleSettings), this.operation)
    }

    private generateValues(settings: ExampleSettings): ExampleValues {
        const first = random(settings.minValue, settings.maxValue)
        const minSecond = getValueBetween(settings.minValue, settings.minResult - first, settings.maxResult - first)
        const maxSecond = getValueBetween(settings.maxValue, minSecond, settings.maxResult - first)
        const second = random(minSecond, maxSecond)

        return randomFlag(60) ? new ExampleValues(first, second) : new ExampleValues(second, first)
    }
}
