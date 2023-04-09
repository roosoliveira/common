import { Exception } from './exception'

export class NotFound extends Exception {
    constructor(protected subject: string) {
        super('not-found')
    }
}
