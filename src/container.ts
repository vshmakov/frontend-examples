import {ExampleGenerator} from "./ExampleGenerator";
import {AttemptProvider} from "./AttemptProvider";
import {ProfileProvider} from "./ProfileProvider";

export const exampleGenerator = new ExampleGenerator()
export const attemptProvider = new AttemptProvider(new ProfileProvider())
