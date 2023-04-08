export type ID<T = any> = T extends infer E ? E : T
export type Maybe<T = any> = T | undefined | null

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

export interface Stringable {
    toString(): string
}