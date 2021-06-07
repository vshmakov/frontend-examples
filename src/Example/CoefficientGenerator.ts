import {Example} from "./Example";
import {ExampleSettings} from "./ExampleSettings";

export class CoefficientGenerator {
    public getUniqueCoefficient(example: Example, solvedExamples: Example[]): number {
        let uniqueCoefficient = 1
        const solvedExamplesCount = solvedExamples.length || 1
        const base = solvedExamplesCount ** 0.5
        const keys: (keyof Example)[] = ['first', 'operation', 'second']

        for (let solvedExample of solvedExamples) {
            const isEqualExample = keys.every((key: keyof Example): boolean => example[key] === solvedExample[key])

            if (isEqualExample) {
                uniqueCoefficient -= 60 / 100 / base
            }

            if (example.solution === solvedExample.solution) {
                uniqueCoefficient -= 40 / 100 / base
            }
        }

        return uniqueCoefficient
    }

    public getAmplitudeCoefficient(example: Example, exampleSettings: ExampleSettings): number {
        let amplitudeCoefficient = 0
        amplitudeCoefficient += this.getAmplitude(example.first, exampleSettings.minValue, exampleSettings.maxValue)
        amplitudeCoefficient += this.getAmplitude(example.second, exampleSettings.minValue, exampleSettings.maxValue)

        return 1 - amplitudeCoefficient / 2
    }

    private getAmplitude(value: number, min: number, max: number): number {
        const middle = (min + max) / 2
        const amplitude = Math.abs(middle - value)
        let delta = Math.abs(max - min)

        if (0 === delta) {
            delta = 1
        }

        return amplitude / delta
    }
}
