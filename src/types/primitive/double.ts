import { Float } from './float'

export class Double extends Float {
    constructor(value: number, protected precision: number = 2) {
        super(value)
    }

    getValue() {
        return parseFloat(this.toString())
    }

    toString(): string {
        return this.value.toFixed(this.precision)
    }
}
