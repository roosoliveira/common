import { Base } from './base'
import { Integer } from './integer'

export class Text extends Base<string> {
    static join(texts: Text[], separator: string = ' '): Text {
        const toStr = (txt: Text) => txt.toString()
        return new Text(texts.map(toStr).join(separator))
    }

    isEqual(value: Text): boolean {
        return value.getValue() === this.value
    }

    isDiff(value: Text): boolean {
        return value.getValue() !== this.value
    }

    concat(text: Text): Text {
        return new Text(this.getValue() + text.getValue())
    }

    toLowerCase(): Text {
        return new Text(this.getValue().toLowerCase())
    }

    toUpperCase(): Text {
        return new Text(this.getValue().toUpperCase())
    }

    capitalize(): Text {
        const firstCharUpper = (str: string) =>
            str.charAt(0).toUpperCase() + str.slice(1)

        const str = this.getValue().split(' ').map(firstCharUpper).join(' ')
        return new Text(str)
    }

    replace(search: Text, replaceValue: Text): Text {
        return new Text(
            this.getValue().replace(search.getValue(), replaceValue.getValue())
        )
    }

    length(): Integer {
        return new Integer(this.getValue().length)
    }

    toString(): string {
        return this.value
    }
}
