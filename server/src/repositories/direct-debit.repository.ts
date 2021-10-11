import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {DirectDebit, DirectDebitRelations} from '../models';

export class DirectDebitRepository extends DefaultCrudRepository<
  DirectDebit,
  typeof DirectDebit.prototype.id,
  DirectDebitRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(DirectDebit, dataSource);
  }
}
