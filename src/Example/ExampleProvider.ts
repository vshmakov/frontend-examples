import {Example} from "./Example";
import {Task} from "../Task/Task";
import {ExampleGenerator} from "./ExampleGenerator";

export class ExampleProvider {
    public constructor(
        private readonly exampleGenerator: ExampleGenerator
    ) {
    }

    public getActualOrNewExample(task: Task): Example {
        const previousExample = task.lastExample;

        if (null !== previousExample && !previousExample.hasAnswer) {
            return previousExample
        }

        const newExample = this.getNewExample(task, previousExample);
        task.examples.push(newExample)

        return newExample
    }

    private getNewExample(task: Task, previousExample: Example | null): Example {
        if (null !== previousExample && !previousExample?.isSolved) {
            return new Example(
                previousExample?.first,
                previousExample?.operation,
                previousExample?.second,
            )
        }

        return this.exampleGenerator.generate(task);
    }
}
