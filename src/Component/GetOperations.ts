import {BaseOperation} from "./BaseOperation";
import {Operation} from "../Example/Operation";

export function getOperations(operation: BaseOperation): Operation[] {
    return [operation, operation + 1]
}
