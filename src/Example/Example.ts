import {Operation} from "./Operation";

export class Example {
    public constructor(
        private readonly first: number,
        private readonly operation: Operation,
        private readonly second: number,
    ) {
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

    public isRight(answer: number): boolean {
        return answer === this.solved
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
