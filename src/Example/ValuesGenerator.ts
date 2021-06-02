import {OperationGenerator} from "./OperationGenerator";
import {ExampleSettings} from "./ExampleSettings";
import {ExampleValues} from "./ExampleValues";
import {Example} from "./Example";
import {Operation} from "./Operation";

export abstract class ValuesGenerator implements OperationGenerator {
    public abstract readonly operation: Operation

    public generate(exampleSettings: ExampleSettings): Example {
        return Example.createFromValues(this.generateValues(exampleSettings), this.operation)
    }

    protected abstract generateValues(settings: ExampleSettings): ExampleValues
}
