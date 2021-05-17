import React from 'react';

function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

enum Operation {
    Add = 1,
    Sub,
    Mult,
    Div
}

class Example {
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

interface AppState {
    answer: string
    example: Example
}

class App extends React.Component<{}, AppState> {
    public readonly state = {
        answer: '',
        example: this.generateExample()
    }

    public render() {
        return (
            <form onSubmit={this.submitHandler.bind(this)}>
                <span>{this.state.example.string} = </span>
                <input
                    type="text"
                    value={this.state.answer}
                    onChange={this.changeHandler.bind(this)}/>
                <button type="submit">Answer</button>
            </form>
        );
    }

    private changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            answer: event.target.value
        })
    }

    private submitHandler(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault()

        if (this.state.example.isRight(+this.state.answer)) {
            this.setState({
                example: this.generateExample()
            })
        }

        this.setState({
            answer: ''
        })
    }

    private generateExample(): Example {
        return new Example(
            random(1, 10),
            random(Operation.Add, Operation.Sub),
            random(1, 10),
        )
    }
}

export default App;
