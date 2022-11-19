import { Document } from 'mongoose';

export interface IProduct extends Document{
    readonly title: string;
    readonly price: number;
    readonly rating: number;
    readonly description: string;
    readonly category: string;
    readonly image: string;
}
