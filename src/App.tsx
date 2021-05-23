import React from 'react';
import {Solve} from "./Example/Solve";
import {ExampleProvider} from "./Example/ExampleProvider";
import {TaskProvider} from "./Task/TaskProvider";
import {ExampleGenerator} from './Example/ExampleGenerator'
import {CoefficientGenerator} from "./Example/CoefficientGenerator";
import {OperationGeneratorCollection} from "./Example/OperationGeneratorCollection";
import {AddGenerator} from "./Example/AddGenerator";

const operationGeneratorCollection = new OperationGeneratorCollection([new AddGenerator()])
const coefficientGenerator = new CoefficientGenerator()
const exampleGenerator = new ExampleGenerator(operationGeneratorCollection, coefficientGenerator)
const exampleProvider = new ExampleProvider(exampleGenerator)
const taskProvider = new TaskProvider()

export default function App() {
    return (
        <Solve taskProvider={taskProvider} exampleProvider={exampleProvider}/>
    )
}
