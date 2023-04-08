import { isEmpty } from '../helpers'
import { MapCallback } from './types'

export class Maybe<T = any> {
    private constructor(private value: T) {}

    static of<T = any>(value: T): Maybe<T> {
        return new Maybe(value)
    }

    static null(): Maybe {
        return new Maybe(null)
    }

    private isEmpty(): boolean {
        return isEmpty(this.value)
    }

    map(cb: MapCallback<T>): Maybe {
        if (this.isEmpty()) return Maybe.null()
        return Maybe.of<ReturnType<typeof cb>>(cb(this.value))
    }
}
