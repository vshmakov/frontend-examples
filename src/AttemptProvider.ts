import {Attempt} from "./Attempt";
import {ProfileProvider} from "./ProfileProvider";

export class AttemptProvider {
    public constructor(private readonly profileProvider: ProfileProvider) {
    }

    public getCurrentOrNewAttempt(): Attempt {
return  new Attempt(
    this.profileProvider.getCurrentProfile()
)
    }
}
