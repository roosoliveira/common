export function first<T = any>(values: T[]): T {
    return values[0]
}

export function count(values: any[]): number {
    return values.length
}

export function last<T = any>(values: T[]): T {
    return values[count(values) - 1]
}
