import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [CrudModule],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
