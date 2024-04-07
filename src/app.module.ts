import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://lharshana2002:AcLQCZPDjxfSayEY@e-commerce.oc0xly1.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
