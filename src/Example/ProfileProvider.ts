import {Profile} from "./Profile";
import {ExampleSettingsNormalizer} from "./ExampleSettingsNormalizer";

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
]

export class ProfileProvider {
    public constructor(private readonly exampleSettingsNormalizer: ExampleSettingsNormalizer) {
    }

    public get defaultAddProfile(): Profile {
        this.exampleSettingsNormalizer.normalizeAddSettings(add10Profile.exampleSettings)

        return add10Profile
    }

    public get addProfiles(): Profile[] {
        addProfiles.map((profile: Profile): void => this.exampleSettingsNormalizer.normalizeAddSettings(profile.exampleSettings))

        return addProfiles
    }
}
