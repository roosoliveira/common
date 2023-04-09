export type ID<T = any> = T extends infer E ? E : T

export type Period = {
    startDate: Date
    endDate: Date
}

export interface Pagination {
    page: number
    size: number
}

export interface PaginatedData<T = any> extends Pagination {
    data: T[]
}

export type MapCallback<T = any, R = any> = (value: T) => R

export type Dictionary<T = any> = { [key: string | number]: T }
