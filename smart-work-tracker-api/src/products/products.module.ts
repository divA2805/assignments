import { Module } from '@nestjs/common';
import { ProductController } from './products.controller.js';
import { ProductService } from './products.service.js';

@Module({
    providers:[ProductService],
    controllers:[ProductController]
})
export class ProductsModule {}
