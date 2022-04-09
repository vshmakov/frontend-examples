import css from "./Solve.module.css";

export function getAnswerResultClass(isRight: boolean | null): string {
    if (null === isRight) {
        return ''
    }

    return isRight ? css.write_answer : css.wrong_answer
}
