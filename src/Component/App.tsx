import React from 'react';
import {Solve} from "./Solve";
import {ExampleProvider} from "../Example/ExampleProvider";
import {TaskProvider} from "../Task/TaskProvider";
import {TaskSettingsManager} from "../Task/TaskSettingsManager";
import {ExampleGenerator} from '../Example/ExampleGenerator'
import {CoefficientGenerator} from "../Example/CoefficientGenerator";
import {OperationGeneratorCollection} from "../Example/OperationGeneratorCollection";
import {AddGenerator} from "../Example/AddGenerator";
import {RatingGenerator} from "../Task/RatingGenerator";
import {RevertGenerator} from "../Example/RevertGenerator";
import {TaskSettingsNormalizer} from "../Task/TaskSettingsNormalizer";
import {ProfileProvider} from "../Example/ProfileProvider";
import {ExampleSettingsNormalizer} from "../Example/ExampleSettingsNormalizer";

const addGenerator = new AddGenerator()
const operationGeneratorCollection = new OperationGeneratorCollection([
    addGenerator,
    new RevertGenerator(addGenerator),
])
const coefficientGenerator = new CoefficientGenerator()
const exampleGenerator = new ExampleGenerator(operationGeneratorCollection, coefficientGenerator)
const exampleProvider = new ExampleProvider(exampleGenerator)
const exampleSettingsNormalizer = new ExampleSettingsNormalizer()
const taskSettingsNormalizer = new TaskSettingsNormalizer(exampleSettingsNormalizer)
const profileProvider = new ProfileProvider(exampleSettingsNormalizer)
const taskSettingsManager = new TaskSettingsManager(taskSettingsNormalizer, profileProvider)
const taskProvider = new TaskProvider(taskSettingsManager)
const ratingGenerator = new RatingGenerator()

export default function App() {
    return (
        <Solve
            taskProvider={taskProvider}
            taskSettingsManager={taskSettingsManager}
            ratingGenerator={ratingGenerator}
            exampleProvider={exampleProvider}
        profileProvider={profileProvider}/>
    )
}
