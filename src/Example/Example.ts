import {Operation} from "./Operation";

export class Example {
    public answer: number | null = null

    public constructor(
        public readonly first: number,
        public readonly operation: Operation,
        public readonly second: number,
    ) {
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

    public get isRight(): boolean {
        return this.answer === this.solved
    }

    private get solved(): number {
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
