import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product {

    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    rank: number;


}

export const ProductSchema = SchemaFactory.createForClass(Product);