import {Operation} from "./Operation";
import {OperationGenerator} from "./OperationGenerator";

export class OperationGeneratorCollection {
    public constructor(private readonly generators: OperationGenerator[]) {
    }

    public getGenerator(operation: Operation): OperationGenerator {
for (let generator of this.generators){
    if (operation===generator.operation){
        return  generator
    }
}

    throw new DOMException(`Generator with ${operation} does not exist`)
    }
}
