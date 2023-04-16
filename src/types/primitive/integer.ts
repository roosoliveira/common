import { Float } from './float'

export class Integer extends Float {
    getValue() {
        return Math.trunc(this.value)
    }

    inc(): Integer {
        return new Integer(this.getValue() + 1)
    }

    dec(): Integer {
        return new Integer(this.getValue() - 1)
    }
}
