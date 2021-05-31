import {ExampleSettings} from "./ExampleSettings";
import {Operation} from "./Operation";
import {TaskSettings} from "../Task/TaskSettings";
import {Profile} from "./Profile";

export const defaultProfile: Profile = {
    name: 'В пределах 10',
    exampleSettings: {
        minValue: 1,
        maxValue: 9,
        minResult: 2,
        maxResult: 10
    }
}

export const addProfiles: Profile[] = [
    defaultProfile,
    {
        name: 'В пределах 20',
        exampleSettings: {
            minValue: 1,
            maxValue: 19,
            minResult: 2,
            maxResult: 20
        }
    }

]
