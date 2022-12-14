import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controller/product/product.controller';
import { ProductSchema } from './schema/product.schema';
import { ProductService } from './service/product/product.service';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://faiz:kolobok13@cluster0.9fp7uss.mongodb.net/?retryWrites=true&w=majority`,{dbName: 'productdb'}),
  MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
  controllers: [AppController,ProductController],
  providers: [AppService,ProductService],
})
export class AppModule {}
