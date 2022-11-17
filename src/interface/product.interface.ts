import { Document } from 'mongoose';

export interface IProduct extends Document{
    readonly title: string;

    readonly price: number;

    readonly rank: number;

}
