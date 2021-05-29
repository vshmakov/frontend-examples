import {Task} from "./Task";

export class RatingGenerator {
    private readonly coefficients = {
        '10': [5, 6, 8, 9],
        '20': [14, 15, 17, 19],
    }

    public getRating(task: Task): number {
        const coeeficients = this.getTaskCoefficients(task)
        let rating = 0

        for (rating; rating < coeeficients.length; rating++) {
            if (task.rightExamplesCount < coeeficients[rating]) {
                break
            }
        }

        return rating + 1
    }

    private getTaskCoefficients(task: Task): number[] {
        const unknownIndex = Object.keys(this.coefficients)
            .reduce((previousExamplesCount: string, examplesCount: string): string => task.solvedExamplesCount >= +examplesCount ? examplesCount : previousExamplesCount)
        const coefficients = this.coefficients
        const index = unknownIndex as unknown as keyof typeof coefficients
        const standardExamplesCount = +index

        return this.coefficients[index]
            .map((examplesCount: number): number => Math.round(examplesCount * task.solvedExamplesCount / standardExamplesCount))
    }
}
