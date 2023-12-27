import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersModule } from './users/users.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  const config = new DocumentBuilder()
  .setTitle('Documentação da API')
  .setDescription('API-REST')
  .setVersion('1.0')
  .addTag('REST')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api',app,document);

  await app.listen(3000);
}
bootstrap();
