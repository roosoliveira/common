import { ID } from './primitive'

export interface EntityParams {
    id: ID
}

export interface Entity {
    getId(): ID
}
