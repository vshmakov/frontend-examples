import React from 'react';
import {Solve} from "./Example/Solve";
import {ExampleProvider} from "./Example/ExampleProvider";
import {ProfileProvider} from "./Profile/ProfileProvider";
import {TaskProvider} from "./Task/TaskProvider";
import {ExampleGenerator} from './Example/ExampleGenerator'

const exampleProvider = new ExampleProvider(new ExampleGenerator())
const taskProvider = new TaskProvider(new ProfileProvider())

export default function App() {
    return (
        <Solve taskProvider={taskProvider} exampleProvider={exampleProvider}/>
    )
}
