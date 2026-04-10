import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const image = await prisma.blogImage.findUnique({
      where: { id },
      select: { data: true, mimeType: true, filename: true },
    });

    if (!image) {
      return new NextResponse("Image non trouvée", { status: 404 });
    }

    const buffer = Buffer.from(image.data);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": image.mimeType,
        "Content-Length": buffer.length.toString(),
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Disposition": `inline; filename="${image.filename}"`,
      },
    });
  } catch (error) {
    console.error("Error serving image:", error);
    return new NextResponse("Erreur serveur", { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.blogImage.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting image:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression." },
      { status: 500 }
    );
  }
}
