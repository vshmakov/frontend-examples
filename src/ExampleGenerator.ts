import {Example} from "./Example";
import {random} from "./Random";
import {Operation} from "./Operation";
import {Attempt} from "./Attempt";

export class ExampleGenerator {
    public generate(attempt: Attempt): Example {
        const example = new Example(
            random(1, 10),
            random(Operation.Add, Operation.Sub),
            random(1, 10),
        );
        attempt.addExample(example)

        return example
    }
}
