import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from 'src/shared/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      envFilePath: '../.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
