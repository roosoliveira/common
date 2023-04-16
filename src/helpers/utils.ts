import { Exception, NotFound } from '../exceptions'
import { Entity, GetOne, ID, Nullable } from '../types'
import { Data, Float } from '../types/primitive'
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

export async function tryGetOne<T extends Entity>(params: {
    id: ID
    subject: string
    repository: GetOne<Nullable<T>>
}): Promise<T> {
    const { id, repository, subject } = params
    const item = await repository.getOne(id)
    throwIf(isEmpty(item), NotFound, subject)
    return item
}

export function toStr(data: Text): string {
    return data.toString()
}

export function toNum(data: Float): number {
    return data.getValue()
}
