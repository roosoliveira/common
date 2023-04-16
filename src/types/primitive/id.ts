import { Base } from './base'

export class ID extends Base<string | number> {
    isEqual(value: ID): boolean {
        return this.getValue() === value.getValue()
    }

    isDiff(value: ID): boolean {
        return this.getValue() !== value.getValue()
    }
}
