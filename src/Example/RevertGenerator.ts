import {Operation} from "./Operation";
import {OperationGenerator} from "./OperationGenerator";
import {Example} from "./Example";
import {ExampleSettings} from "./ExampleSettings";

export class RevertGenerator implements OperationGenerator {
    public readonly operation: Operation

    public constructor(private readonly originalGenerator: OperationGenerator) {
        const operation = originalGenerator.operation

        if (![Operation.Add, Operation.Mult].includes(operation)) {
            throw new DOMException(`You can not revert ${operation} operation example generation`)
        }

        this.operation = operation + 1
    }

    public generate(exampleSettings: ExampleSettings): Example {
        const example = this.originalGenerator.generate(exampleSettings)

        return new Example(
            example.solution,
            this.operation,
            example.second
        )
    }
}
