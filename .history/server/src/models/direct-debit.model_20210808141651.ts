import {Entity, model, property} from '@loopback/repository';

@model()
export class DirectDebit extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  sum: number;

  @property({
    type: 'date',
  })
  date?: string;


  constructor(data?: Partial<DirectDebit>) {
    super(data);
  }
}

export interface DirectDebitRelations {
  // describe navigational properties here
}

export type DirectDebitWithRelations = DirectDebit & DirectDebitRelations;
