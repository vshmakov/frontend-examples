import {Profile} from "./Profile";
import {ExampleSettingsNormalizer} from "./ExampleSettingsNormalizer";
import {clone} from "../ObjectManipulator";

const add10Profile: Profile = {
    name: 'В пределах 10',
    exampleSettings: {
        minValue: 1,
        maxValue: 9,
        minResult: 0,
        maxResult: 0
    }
}

const addProfiles: Profile[] = [
    add10Profile,
    {
        name: 'В пределах 20',
        exampleSettings: {
            minValue: 1,
            maxValue: 19,
            minResult: 0,
            maxResult: 0
        }
    },
    {
        name: 'В пределах 100',
        exampleSettings: {
            minValue: 10,
            maxValue: 90,
            minResult: 0,
            maxResult: 0
        }
    },
    {
        name: 'В пределах 10 000 (в столбик)',
        exampleSettings: {
            minValue: 100,
            maxValue: 10000 - 100,
            minResult: 0,
            maxResult: 0
        }
    },
    {
        name: 'От -100 до 100',
        exampleSettings: {
            minValue: -100,
            maxValue: 100,
            minResult: -100,
            maxResult: 100
        }
    },
]

export class ProfileProvider {
    public constructor(private readonly exampleSettingsNormalizer: ExampleSettingsNormalizer) {
    }

    public get defaultAddProfile(): Profile {
        this.exampleSettingsNormalizer.normalizeAddSettings(add10Profile.exampleSettings)

        return this.getNormalizedAddProfile(add10Profile)
    }

    public get addProfiles(): Profile[] {
        return addProfiles.map(this.getNormalizedAddProfile.bind(this))
    }

    private getNormalizedAddProfile(profile: Profile): Profile {
        const cloned = clone(profile)
        this.exampleSettingsNormalizer.normalizeAddSettings(cloned.exampleSettings)

        return cloned
    }
}
