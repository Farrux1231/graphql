import { Field, Float, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateProductDto{

    @Field()
    name:string

    @Field(()=>Float)
    price:number
}
