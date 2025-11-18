import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get('image');

    if (!file) return NextResponse.json({ error: 'Nenhuma imagem' }, { status: 400 });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}${path.extname(file.name)}`;
    const filepath = path.join(process.cwd(), 'public/uploads', filename);

    await writeFile(filepath, buffer);

    return NextResponse.json({
      id: filename,
      url: `/uploads/${filename}`,
      filename: file.name,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro no upload' }, { status: 500 });
  }
}   