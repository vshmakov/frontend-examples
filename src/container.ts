import {ExampleGenerator} from "./Example/ExampleGenerator";
import {ProfileProvider} from "./Profile/ProfileProvider";
import {TaskProvider} from "./Task/TaskProvider";

export const exampleGenerator = new ExampleGenerator()
export const taskProvider = new TaskProvider(new ProfileProvider())
