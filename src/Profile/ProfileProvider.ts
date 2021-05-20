import {Profile} from "./Profile";
import {Operation} from "../Example/Operation";
import {OperationSetting} from "./OperationSetting";

export class ProfileProvider {
    public getCurrentProfile(): Profile {
        return new Profile(
            'Default profile',
            10,
            new OperationSetting(0, 10)
        )
    }
}
