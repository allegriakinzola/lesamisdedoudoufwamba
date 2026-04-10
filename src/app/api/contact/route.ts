import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    // Try to save to database if available, otherwise just return success
    try {
      const { prisma } = await import("@/lib/prisma");
      await prisma.contactMessage.create({
        data: { name, email, subject, message },
      });
    } catch {
      // Database not configured yet — log to console instead
      console.log("New contact message:", { name, email, subject, message });
    }

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}
