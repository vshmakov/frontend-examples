import {Example} from "./Example";
import {Operation} from "./Operation";
import {Profile} from "../Profile/Profile";
import {ExampleValues} from "./ExampleValues";
import {random} from "../Random";

export class ExampleGenerator {
    public generate(profile: Profile): Example {
        const exampleValues = this.add()

        return new Example(
            exampleValues.first,
            Operation.Add,
            exampleValues.second,
        )
    }

    private add(): ExampleValues {
        const minValue = 1
        const maxValue = 10
        const minResult = 1
        const maxResult = 10

        const first = random(minValue, maxValue)
        const minSecond = this.getValueBetween(minValue, minResult - first, minValue)
        const maxSecond = this.getValueBetween(maxValue, minSecond, maxResult - first)
        const second = random(minSecond, maxSecond)

        return new ExampleValues(first, second)
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
