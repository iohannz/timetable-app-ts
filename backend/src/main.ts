import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TConfig } from 'src/shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = app.get(ConfigService);
  await app.listen(config.getOrThrow<TConfig['PORT']>('PORT'));
}
bootstrap();
