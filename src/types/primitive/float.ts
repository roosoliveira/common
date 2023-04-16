import { Base } from './base'
import { Data } from './data'

export class Float extends Base<number> implements Data<number> {
    static zero(): Float {
        return new Float(0)
    }

    isEqual(value: Float): boolean {
        return this.getValue() == value.getValue()
    }

    isDiff(value: Float): boolean {
        return this.getValue() !== value.getValue()
    }

    isGreaterThan(value: Float): boolean {
        return this.getValue() > value.getValue()
    }

    isGreaterOrEqualThan(value: Float): boolean {
        return this.getValue() >= value.getValue()
    }

    isLessThan(value: Float): boolean {
        return this.getValue() < value.getValue()
    }

    isLessOrEqualThan(value: Float): boolean {
        return this.getValue() <= value.getValue()
    }

    sum(value: Float): Float {
        return new Float(this.getValue() + value.getValue())
    }

    sub(value: Float): Float {
        return new Float(this.getValue() - value.getValue())
    }

    multiply(value: Float): Float {
        return new Float(this.getValue() * value.getValue())
    }

    divBy(value: Float): Float {
        return new Float(this.getValue() / value.getValue())
    }

    abs(): Float {
        return new Float(Math.abs(this.getValue()))
    }

    isNegative(): boolean {
        return this.isGreaterThan(Float.zero())
    }

    isPositive(): boolean {
        return this.isLessThan(Float.zero())
    }

    isZero(): boolean {
        return this.isEqual(Float.zero())
    }
}
