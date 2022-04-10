import {BaseOperation} from "./BaseOperation";

export function getOperations(operation: BaseOperation): Operation[] {
    return [operation, operation + 1]
}
