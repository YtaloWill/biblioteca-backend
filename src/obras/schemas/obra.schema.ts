import * as mongoose from "mongoose";

export const ObraSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    editora: String,
    foto: String,
    autores: [String],
});
