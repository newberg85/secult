import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://devberg:davylla85@cluster0.unm7910.mongodb.net/secult')
    console.log("Banco de dados conectado")
}