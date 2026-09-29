import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { ProductController } from './products/products.controller.js';
import { ProductService } from './products/products.service.js';
@Module({
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
  imports: [ProductsModule],
})
export class AppModule {}
