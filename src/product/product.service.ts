import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

let product = [{id:1, name:"apple", price:150.23},
    {id:2, name:"samsung", price:15.23},
    {id:3, name:"macbook", price:250.74},
    {id:4, name:"phone", price:15.0},
    {id:5, name:"images", price:758.1},
]
@Injectable()
export class ProductService {
    
    findAll(){
        return product
    }

    findOne(id:number){
        let prod = product.filter(prod =>prod.id == id)
        return {...prod}
    }

    create(data:CreateProductDto){
        let newProd = {...data, id:product.at(-1)!.id+1}
        product.push(newProd)
        return product
    }

    update(data:UpdateProductDto){
        let prod = product.find(prod=>prod.id == data.id)
        return prod
    }

    remove(id:number){
        product.filter(prod => prod.id != id)
        return true
    }
}
