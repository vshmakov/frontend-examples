import {Example} from "./Example";
import {random} from "../Random";
import {Operation} from "./Operation";
import {Task} from "../Task/Task";

export class ExampleProvider {
    public getActualOrNewExample(task: Task): Example {
        const previousExample = task.lastExample;

        if (null !== previousExample && !previousExample.hasAnswer) {
            return previousExample
        }

        let newExample = new Example(
            random(1, 10),
            random(Operation.Add, Operation.Sub),
            random(1, 10),
        )

        if (null !== previousExample && !previousExample?.isSolved) {
            newExample = new Example(
                previousExample?.first,
                previousExample?.operation,
                previousExample?.second,
            );
        }

        task.addExample(newExample)

        return newExample
    }
}
