export function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randomFlag(probability: number): boolean {
    return probability / 100 <= Math.random()
}
