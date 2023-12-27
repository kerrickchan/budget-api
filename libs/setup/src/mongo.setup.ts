import { MongooseModule } from '@nestjs/mongoose';
import { name } from '../../../package.json';

export function setupMongooseModuleDb(dbName = name.split('-')[0]) {
  return MongooseModule.forRoot(
    `mongodb://localhost:27017,localhost:27027,localhost:27037`,
    {
      dbName,
    },
  );
}
