import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entity/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Resolver(()=>Product)
export class ProductResolver {
    constructor(private readonly productService:ProductService){}

    @Query(()=>[Product])
    findAll(){
        return this.productService.findAll();
    }

    @Query(()=>Product)
    findOne(@Args("id") id:number){
        return this.productService.findOne(id)
    }
    
    @Mutation(()=> Product)
    create(@Args("data") data:CreateProductDto){
        return this.productService.create(data)
    }

    @Mutation(()=> Product)
    update(@Args("data") data:UpdateProductDto){
        return this.productService.update(data)
    }

    @Mutation(()=>Product)
    remove(@Args("id") id:number){
        return this.productService.remove(id)
    }
}
