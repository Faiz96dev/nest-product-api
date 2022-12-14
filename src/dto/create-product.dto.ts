import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly title: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;

    @IsNumber()
    readonly rating: number;

    @IsString()
    readonly description: string;

    @IsString()
    readonly category: string;

    @IsString()
    readonly image: string;

}