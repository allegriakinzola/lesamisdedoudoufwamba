import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all") === "true";

    const posts = await prisma.blogPost.findMany({
      where: all ? {} : { published: true },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        published: true,
        author: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, coverImage, published, author } = body;

    if (!title || !slug || !excerpt || !content) {
      return NextResponse.json(
        { error: "Les champs titre, slug, extrait et contenu sont requis." },
        { status: 400 }
      );
    }

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        coverImage: coverImage || null,
        published: published ?? false,
        author: author || "Admin",
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error: unknown) {
    console.error("Error creating blog post:", error);
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code: string }).code === "P2002"
    ) {
      return NextResponse.json(
        { error: "Un article avec ce slug existe déjà." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Erreur lors de la création de l'article." },
      { status: 500 }
    );
  }
}
