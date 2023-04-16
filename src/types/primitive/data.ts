import { Emptyable } from '../emptyable'
import { Equals } from '../equals'
import { Stringable } from '../stringable'

export interface Data<T = any> extends Stringable, Equals<Data<T>>, Emptyable {
    getValue(): T
}
