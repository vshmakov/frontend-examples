import {ExampleProvider} from "./Example/ExampleProvider";
import {ProfileProvider} from "./Profile/ProfileProvider";
import {TaskProvider} from "./Task/TaskProvider";

export const exampleProvider = new ExampleProvider()
export const taskProvider = new TaskProvider(new ProfileProvider())
