export type ID<T = any> = T extends infer E ? E : T
export type Int = number
export type Nullable<T = any> = T | null

export type Period = {
    startDate: Date
    endDate: Date
}

export type MapCallback<T = any, R = any> = (value: T) => R

export type Dictionary<T = any> = { [key: string | number]: T }
