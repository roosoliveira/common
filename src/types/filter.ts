import { Int } from './types'

export class FilterParams {
    offset?: Int
    limit?: Int
}

export class Filter {
    constructor(protected params: FilterParams) {}

    getOffset(): Int {
        return this.params.offset || 0
    }

    getLimit(): Int {
        return this.params.limit || 15
    }
}
