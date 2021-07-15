import {Task} from "./Task";
import {getObjectKeys} from "../ObjectManipulator";

enum Rating {
    Super = 'Ты молодец!',
Good = 'Хороший результат!',
TryAgain = 'Попробуй еще раз!',
}

export class RatingGenerator {
    private readonly coefficients = {
        '10': [5, 6, 8, 9],
        '20': [14, 15, 17, 19],
    }

    public getRating(task: Task): Rating {
        const coeeficients = this.getTaskCoefficients(task)
        let rating = 0

        for (rating; rating < coeeficients.length; rating++) {
            if (task.rightExamplesCount < coeeficients[rating]) {
                break
            }
        }

        return this.getRatingByNumber(rating + 1)
    }

    private getRatingByNumber(number: number): Rating {
        switch (number) {
            case 5:
                return Rating.Super

            case 4:
                return Rating.Good

            default:
                return Rating.TryAgain
        }
    }

    private getTaskCoefficients(task: Task): number[] {
        const coefficients = this.coefficients
        type ExamplesCount = keyof typeof coefficients
        const index = getObjectKeys(this.coefficients)
            .reduce((previousExamplesCount: ExamplesCount, examplesCount: ExamplesCount): ExamplesCount => task.solvedExamplesCount >= +examplesCount ? examplesCount : previousExamplesCount)
        const standardExamplesCount = +index

        return this.coefficients[index]
            .map((examplesCount: number): number => Math.round(examplesCount * task.solvedExamplesCount / standardExamplesCount))
    }
}
