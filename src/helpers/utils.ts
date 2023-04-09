import { Exception } from '../exceptions'
import { count } from './array'

export function not(value: boolean): boolean {
    return !value
}

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

export function isNotEmpty(value: any): boolean {
    return not(isEmpty(value))
}

export function throwIf(
    isWrong: boolean,
    E: new (args?: any) => Exception,
    args?: any
) {
    if (isWrong) {
        throw new E(args)
    }
}
