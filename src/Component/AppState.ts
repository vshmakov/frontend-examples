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
const profileProvider = new ProfileProvider(exampleSettingsNormalizer)
const taskSettingsManager = new TaskSettingsManager(taskSettingsNormalizer, profileProvider)
const taskProvider = new TaskProvider(taskSettingsManager)
const ratingGenerator = new RatingGenerator()

export class AppState {
    public page: Page = Page.Solve

    public constructor() {
        makeAutoObservable(this)
    }


    public startNewTask(): void {
        taskProvider.cleanCurrentTask()
        this.openPage(Page.Solve)
    }

    private openPage(page: Page): void {
        this.page = page
    }
}
