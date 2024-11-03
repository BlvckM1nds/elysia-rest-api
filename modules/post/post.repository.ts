import prisma from "../../config/prisma";
import { Post } from "@prisma/client";

class PostRepository {
  async getAll(): Promise<Post[]> {
    return await prisma.post.findMany({ orderBy: { createdAt: "asc" } });
  };

  async getById(id: number): Promise<Post | null> {
    return await prisma.post.findUnique({ where: { id } });
  };

  async create(options: { title: string, content: string }): Promise<Post> {
    const { title, content } = options;
    
    return await prisma.post.create({ data: { title, content } });
  };

  async update(id: number, options: { title: string, content: string }): Promise<Post> {
    const { title, content } = options;

    return await prisma.post.update({
      where: { id },
      data: {
        ...(title ? { title } : {}),
        ...(content ? { content } : {}),
      }
    });
  };

  async delete(id: number): Promise<void> {
    await prisma.post.delete({ where: { id } });
  };
};

export const postRepository = new PostRepository();
