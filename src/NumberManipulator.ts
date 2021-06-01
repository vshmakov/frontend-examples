export function getValueBetween(value: number, min: number, max: number): number {
    if (min > max) {
        throw new DOMException(`${min} is greater than ${max}`)
    }

    if (value < min) {
        return min
    }

    if (value > max) {
        return max
    }

    return value
}

export function getValueLessThan(value: number, max: number): number {
    if (value > max) {
        return max
    }

    return value
}
