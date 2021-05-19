import {Profile} from "./Profile";

export class ProfileProvider {
    public getCurrentProfile(): Profile {
return new Profile(
    'Default profile',
    2
)
    }
}
