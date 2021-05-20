import {Example} from "./Example";
import {Operation} from "./Operation";
import {Profile} from "../Profile/Profile";
import {ExampleValues} from "./ExampleValues";

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

        const minFirst = this.getValueBetween(minValue, minResult - maxValue, maxValue)
        const maxFirst = this.getValueBetween(maxValue, minFirst, maxResult - minValue)

        return new ExampleValues(1, 11)
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
