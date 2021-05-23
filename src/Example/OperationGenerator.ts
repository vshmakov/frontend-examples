import {Example} from "./Example";
import {Operation} from "./Operation";
import {ExampleSettings} from "./ExampleSettings";

export interface OperationGenerator {
    operation: Operation

    generate(exampleSettings: ExampleSettings): Example
}
