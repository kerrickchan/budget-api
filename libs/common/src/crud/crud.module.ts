import { Module } from '@nestjs/common';
import { CrudOneRepository } from './crud-one.repository';

@Module({
  imports: [],
  providers: [CrudOneRepository],
  exports: [CrudOneRepository],
})
export class CrudModule {}
