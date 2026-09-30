import { Controller, Get,Delete, Param, Query } from "@nestjs/common";
import { ProductService,Task } from "./products.service.js";

@Controller('products')
export class ProductController{
    constructor(private readonly productService:ProductService){}

    @Get('data')
    getall():Task[]{
        return this.productService.getall();

    }

    @Delete(':id')
    removeid(@Param('id') id: string) {
        return this.productService.removeid(+id);
    }

    @Get(':id')
    getbyId(@Param('id') id:string){
        return this.productService.getbyId(+id);
    }

    @Get()
    filter(@Query('name') name?:string):Task[]{
        return this.productService.filterproducts(name);
    }


}