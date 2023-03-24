import { Module } from '@nestjs/common';
import { SpecialistsModule } from './specialists/specialists.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot( { envFilePath: ".env", isGlobal: true } ),
    MongooseModule.forRoot( process.env.MONGO_URI ),
    SpecialistsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
