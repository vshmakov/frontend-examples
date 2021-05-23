import {Operation} from "./Operation";
import {ExampleValues} from "./ExampleValues";

export class Example {
    public answer: number | null = null

    public constructor(
        public readonly first: number,
        public readonly operation: Operation,
        public readonly second: number,
    ) {
    }

    public static createFromValues(exampleValues: ExampleValues, operation: Operation): Example {
        return new Example(exampleValues.first, operation, exampleValues.second)
    }

    public get hasAnswer(): boolean {
        return null !== this.answer
    }

    public get string(): string {
        const signs = {
            [Operation.Add]: '+',
            [Operation.Sub]: '-',
            [Operation.Mult]: '*',
            [Operation.Div]: ':',
        }

        return `${this.first} ${signs[this.operation]} ${this.second}`
    }

    public get isSolved(): boolean {
        return this.answer === this.solution
    }

    public get solution(): number {
        switch (this.operation) {
            case Operation.Add:
                return this.first + this.second

            case Operation.Sub:
                return this.first - this.second

            case Operation.Mult:
                return this.first * this.second
        }

        return this.first / this.second
    }
}
