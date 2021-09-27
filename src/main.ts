import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import * as logger from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const port = 3000;
  app.use(logger('dev'));
  await app.listen(port, () =>
    console.info('Server ready at: http://localhost:%d', port),
  );
}
bootstrap();
