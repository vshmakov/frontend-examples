import {Profile} from "./Profile";
import {ExampleSettingsNormalizer} from "./ExampleSettingsNormalizer";
import {ExampleSettings} from "./ExampleSettings";

type ProfileNormalizer = (profile: Profile) => void

export class ProfileProvider {
    private normalizeAddProfile: ProfileNormalizer
    private normalizeMultProfile: ProfileNormalizer

    public constructor(exampleSettingsNormalizer: ExampleSettingsNormalizer) {
        this.normalizeAddProfile=this.normalizeProfile.bind(this, exampleSettingsNormalizer.normalizeAddSettings)
        this.normalizeMultProfile=this.normalizeProfile.bind(this, exampleSettingsNormalizer.normalizeMultSettings)
    }

    public get defaultAddProfile(): Profile {
        const add10Profile: Profile = {
            name: 'В пределах 10',
            exampleSettings: {
                minValue: 1,
                maxValue: 9,
                minResult: 0,
                maxResult: 0
            }
        }
        this.normalizeAddProfile(add10Profile)

        return add10Profile
    }

    public get addProfiles(): Profile[] {
        const addProfiles: Profile[] = [
            this.defaultAddProfile,
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
        addProfiles.map(this.normalizeAddProfile)

        return addProfiles
    }

    public get defaultMultProfile(): Profile {
        const multTableProfile: Profile = {
            name: 'Таблица умножения',
            exampleSettings: {
                minValue: 1,
                maxValue: 9,
                minResult: 1,
                maxResult: 81
            }
        }
        this.normalizeMultProfile(multTableProfile)

        return multTableProfile
    }

    public get multProfiles(): Profile[] {
        const multProfiles: Profile[] = [
            this.defaultMultProfile
        ]
        multProfiles.map(this.normalizeMultProfile)

        return multProfiles
    }

    private normalizeProfile(normalizer: (exampleSettings: ExampleSettings) => void, profile: Profile): void {
        normalizer(profile.exampleSettings)
    }
}
