export function getObjectKeys<T extends {}>(object: T): (keyof T)[] {
    const keys = Object.keys(object)

    return keys as (keyof T)[]
}

export function isEqual<T extends {}>(object1: T, object2: T): boolean {
    for (let key of getObjectKeys(object1)) {
        if (object1[key] !== object2[key]) {
            return false
        }
    }

    return true
}

export function copyValues<T extends {}>(target: T, source: T): void {
    for (let key of getObjectKeys(source)) {
        target[key] = source[key]
    }
}


export function clone<T extends {}>(object: T): T {
    const clone = {} as T

    for (let key of getObjectKeys(object)) {
        clone[key] = object[key]
    }

    return clone
}
