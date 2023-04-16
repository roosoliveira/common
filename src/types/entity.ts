import { ID } from './types'

export interface EntityParams {
    id: ID
}

export interface Entity {
    getId(): ID
}
