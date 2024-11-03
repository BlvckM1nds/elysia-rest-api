import { Post } from "@prisma/client";
import { postRepository } from "./post.repository";

class PostService {
  async getAll(): Promise<Post[]> {
    return postRepository.getAll();
  };

  async getById(id: number): Promise<Post | null> {
    return postRepository.getById(id);
  };

  async create(options: { title: string, content: string }): Promise<Post> {
    return postRepository.create(options);
  };

  async update(id: number, options: { title: string, content: string }): Promise<Post> {
    return postRepository.update(id, options);
  };

  async delete(id: number): Promise<void> {
    postRepository.delete(id);
  };
};

export const postService = new PostService();
