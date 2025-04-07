import { Field, Float, InputType, Int } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class UpdateProductDto{
    @Field(()=> Int)
    id?:number

    @IsOptional()
    @Field()
    name?:string

    @IsOptional()
    @Field(()=>Float)
    price?:number
}
