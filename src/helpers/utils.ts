import { count } from './array'

export function isUndefined(value: any): boolean {
    return value == undefined
}

export function isNull(value: any): boolean {
    return value == null
}

export function isEmpty(value: any): boolean {
    if (Array.isArray(value)) return count(value) > 0
    return isNull(value) || isUndefined(value)
}
