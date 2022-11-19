import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product {

    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    rating: number;

    @Prop()
    description: string;

    @Prop()
    image: string;

    @Prop()
    category: string;




}

export const ProductSchema = SchemaFactory.createForClass(Product);