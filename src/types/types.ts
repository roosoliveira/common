export type ID = number | string
export type Int = number
export type Nullable<T = any> = T | null | undefined
export type Dictionary<T = any> = { [key: string | number]: T }
export type JSON<T = any> =
    | Dictionary<T>
    | T[]
    | Nullable<T>
    | string
    | number
    | boolean

export type Period = {
    startDate: Date
    endDate: Date
}

export type MapCallback<T = any, R = any> = (value: T) => R
