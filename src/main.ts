import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule.forRoot(process.env.DATABASE),
    new FastifyAdapter({ logger: true }),
  );
  await app.listen(process.env.PORT, '0.0.0.0');
}
bootstrap();