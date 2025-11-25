import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req){
    const data = await req.formData();
    const file = data.get("file");

    const categoriaUpload = data.get("categoriaUpload");

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const pastaCloud = `secult/${categoriaUpload}`;

    return new Promise((resolve) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {folder: pastaCloud},
            (error, result) => {
                if (error) {
                    resolve(NextResponse.json({error: "Erro ao enviar imagem"}, {status: 500}));
                } else {
                    resolve(NextResponse.json({url: result.secure_url}));
                }
            }   
        );
        uploadStream.end(buffer);
    });
}