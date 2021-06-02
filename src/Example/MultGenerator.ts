import {ExampleSettings} from "./ExampleSettings";
import {ExampleValues} from "./ExampleValues";
import {random, randomFlag} from "../Random";
import {getValueBetween} from "../NumberManipulator";
import {ValuesGenerator} from "./ValuesGenerator";
import {Operation} from "./Operation";

export class MultGenerator extends ValuesGenerator {
    public readonly operation: Operation = Operation.Mult

    protected generateValues(settings: ExampleSettings): ExampleValues {
        const first = random(settings.minValue, settings.maxValue)
        const minSecond = getValueBetween(settings.minValue, settings.minResult / first, settings.maxResult / first)
        const maxSecond = getValueBetween(settings.maxValue, minSecond, settings.maxResult / first)
        const second = random(minSecond, maxSecond)

        return randomFlag(60) ? new ExampleValues(first, second) : new ExampleValues(second, first)
    }
}
