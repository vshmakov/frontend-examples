import {makeAutoObservable} from "mobx";
import {AddGenerator} from "../Example/AddGenerator";
import {MultGenerator} from "../Example/MultGenerator";
import {OperationGeneratorCollection} from "../Example/OperationGeneratorCollection";
import {RevertGenerator} from "../Example/RevertGenerator";
import {CoefficientGenerator} from "../Example/CoefficientGenerator";
import {ExampleRepository} from "../Example/ExampleRepository";
import {ExampleGenerator} from "../Example/ExampleGenerator";
import {ExampleProvider} from "../Example/ExampleProvider";
import {ExampleSettingsNormalizer} from "../Example/ExampleSettingsNormalizer";
import {TaskSettingsNormalizer} from "../Task/TaskSettingsNormalizer";
import {ProfileProvider} from "../Example/ProfileProvider";
import {TaskSettingsManager} from "../Task/TaskSettingsManager";
import {TaskProvider} from "../Task/TaskProvider";
import {RatingGenerator} from "../Task/RatingGenerator";
import {Page} from "./Page";
import {TaskState} from "./TaskState";
import {Example} from "../Example/Example";
import React from "react";
import {sleep} from "../sleep";
import {Task} from "../Task/Task";
import {TaskSettings} from "../Task/TaskSettings";

const addGenerator = new AddGenerator()
const multGenerator = new MultGenerator()
const operationGeneratorCollection = new OperationGeneratorCollection([
    addGenerator,
    new RevertGenerator(addGenerator),
    multGenerator,
    new RevertGenerator(multGenerator),
])
const coefficientGenerator = new CoefficientGenerator()
const exampleRepository = new ExampleRepository()
const exampleGenerator = new ExampleGenerator(operationGeneratorCollection, coefficientGenerator, exampleRepository)
const exampleProvider = new ExampleProvider(exampleGenerator)
const exampleSettingsNormalizer = new ExampleSettingsNormalizer()
const taskSettingsNormalizer = new TaskSettingsNormalizer(exampleSettingsNormalizer)
const taskProvider = new TaskProvider(taskSettingsManager)

export class AppState {
    public page: Page = Page.Solve
    public example: Example = this.getActualOrNewExample()
    public isRight: boolean | null = null
    public readonly task = this.getCurrentOrNewTask()
    public readonly ratingGenerator = new RatingGenerator()
    public readonly taskSettingsManager = new TaskSettingsManager(taskSettingsNormalizer, profileProvider)
    public readonly profileProvider = new ProfileProvider(exampleSettingsNormalizer)

    public constructor() {
        makeAutoObservable(this)
    }

    public startNewTask(): void {
        taskProvider.cleanCurrentTask()
        this.openPage(Page.Solve)
    }

    public openPage(page: Page): void {
        this.page = page
    }

    public async answer(answer: number): Promise<void> {
        const example = this.example
        example.answer = answer
        const task = this.task

        if (example.isSolved) {
            exampleRepository.addSolvedExample(example)
        } else {
            if (task.taskSettings.addExamplesOnError) {
                task.taskSettings.examplesCount += 5
            }
        }

        if (task.isSolved) {
            this.openPage(Page.TaskResult)

            return
        }

        this.example = this.getActualOrNewExample()
        this.isRight = example.isSolved
        await sleep(1000)
        this.isRight = null
    }

    private getCurrentOrNewTask(): Task {
        return taskProvider.getCurrentOrNewTask();
    }

    private getActualOrNewExample(): Example {
        return exampleProvider.getActualOrNewExample(this.getCurrentOrNewTask())
    }

    public getCurrentTaskSettings(): TaskSettings {
        const taskSettings = this.taskSettingsManager.getCurrentSettings()
        makeAutoObservable(taskSettings)

        return taskSettings
    }
}
