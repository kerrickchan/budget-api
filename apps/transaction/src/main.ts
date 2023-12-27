import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { TransactionModule } from './transaction.module';

async function bootstrap() {
  const protoPath = join(process.cwd(), 'protos', 'transaction.proto');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TransactionModule,
    {
      transport: Transport.GRPC,
      options: {
        url: 'localhost:5001',
        package: 'transaction',
        protoPath,
      },
    },
  );
  return app.listen();
}
bootstrap();
