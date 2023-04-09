import { Entity } from './entity'
import { Filter } from './filter'
import { ID, Nullable } from './types'

export interface GetOne<T extends Entity | Nullable<Entity>> {
    GetOne(id: ID): Promise<T>
}

export interface GetAll<F extends Filter, T extends Entity> {
    getAll(filter: F): Promise<T[]>
}

export interface Create<IN, E extends Entity> {
    create(data: IN): Promise<E>
}

export interface Update<T extends Entity> {
    Update(data: T): Promise<T>
}

export interface Delete {
    delete(data: ID): Promise<void>
}
