import React from 'react';
import {Solve} from "./Example/Solve";
import {ExampleProvider} from "./Example/ExampleProvider";
import {ProfileProvider} from "./Profile/ProfileProvider";
import {TaskProvider} from "./Task/TaskProvider";

const exampleProvider = new ExampleProvider()
const taskProvider = new TaskProvider(new ProfileProvider())

export default function App() {
    return (
        <Solve taskProvider={taskProvider} exampleProvider={exampleProvider}/>
    )
}
