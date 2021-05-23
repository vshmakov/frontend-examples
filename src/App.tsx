import React from 'react';
import {Solve} from "./Example/Solve";
import {ExampleProvider} from "./Example/ExampleProvider";
import {TaskProvider} from "./Task/TaskProvider";
import {ExampleGenerator} from './Example/ExampleGenerator'
import {CoefficientGenerator} from "./Example/CoefficientGenerator";

const exampleGenerator = new ExampleGenerator(new CoefficientGenerator())
const exampleProvider = new ExampleProvider(exampleGenerator)
const taskProvider = new TaskProvider()

export default function App() {
    return (
        <Solve taskProvider={taskProvider} exampleProvider={exampleProvider}/>
    )
}
