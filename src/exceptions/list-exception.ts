import { Dictionary } from '../types/types'
import { Exception } from './exception'

export class ListException extends Exception {
    private errors: Dictionary<string> = {}

    constructor(key: string) {
        super(key)
    }

    addError(field: string, key: string): ListException {
        this.errors[field] = key
        return this
    }
}
