import { ID, PaginatedData, Pagination } from './types'

export interface GetOne<F = any, T = any> {
    GetOne(filter: F): Promise<T>
}

export interface GetAll<F = any, T = any> {
    getAll(filter: F): Promise<T>
}

export interface GetAllPaginated<F = any, T = any> {
    getAllPaginated(
        filter: F,
        pagination: Pagination
    ): Promise<PaginatedData<T>>
}

export interface Create<IN = any, OUT = any> {
    create(data: IN): Promise<OUT>
}

export interface Update<IN = any, OUT = any> {
    Update(data: IN): Promise<OUT>
}

export interface Delete<I = ID> {
    delete(data: I): Promise<void>
}
