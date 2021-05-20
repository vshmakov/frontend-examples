import {Example} from "./Example";
import {Task} from "../Task/Task";
import {ExampleGenerator} from "./ExampleGenerator";

export class ExampleProvider {
    public constructor(private readonly exampleGenerator: ExampleGenerator) {
    }

    public getActualOrNewExample(task: Task): Example {
        const previousExample = task.lastExample;

        if (null !== previousExample && !previousExample.hasAnswer) {
            return previousExample
        }

        let newExample = this.exampleGenerator.generate(task.profile)

        if (null !== previousExample && !previousExample?.isSolved) {
            newExample = new Example(
                previousExample?.first,
                previousExample?.operation,
                previousExample?.second,
            );
        }

        task.examples.push(newExample)

        return newExample
    }
}
