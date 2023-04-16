import { isEmpty, isNotEmpty } from '../../helpers'
import { Nullable } from '../types'
import { Data } from './data'

export abstract class Base<T = any> implements Data<T> {
    constructor(protected value: Nullable<T>) {}

    isEmpty(): boolean {
        return isEmpty(this.value)
    }

    isNotEmpty(): boolean {
        return isNotEmpty(this.value)
    }

    getValue(): Nullable<T> {
        return this.value
    }

    toString(): string {
        return this.value.toString()
    }

    abstract isEqual(value: Data<T>): boolean
}
