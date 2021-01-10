import { Document } from 'mongoose';

export interface Obra extends Document {
    readonly id: Number;
    readonly titulo: String;
    readonly editora: String;
    readonly foto: String;
    readonly autores: String[];
}