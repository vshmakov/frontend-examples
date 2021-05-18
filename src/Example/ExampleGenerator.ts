import {Example} from "./Example";
import {random} from "../Random";
import {Operation} from "./Operation";
import {Task} from "../Task/Task";

export class ExampleGenerator {
    public generate(task: Task): Example {
        const example = new Example(
            random(1, 10),
            random(Operation.Add, Operation.Sub),
            random(1, 10),
        );
        task.addExample(example)

        return example
    }
}
