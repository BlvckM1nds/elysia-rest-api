import { Context } from "elysia";
import { postService } from "./post.service";

class PostController {
  async getAll() {
    const posts = await postService.getAll();

    return {
      success: true,
      data: posts,
      message: "Posts fetched successfully",
    };
  };

  async getById(ctx: Context) {
    const { id } = ctx.params;
    const post = await postService.getById(Number(id));

    return {
      success: true,
      data: post,
      message: "Post fetched successfully",
    };
  };

  async create(ctx: Context) {
    const body = await ctx.request.json();
    const post = await postService.create(body);

    return {
      success: true,
      data: post,
      message: "Post created successfully",
    };
  };

  async update(ctx: Context) {
    const { id } = ctx.params;
    const body = await ctx.request.json();
    const post = await postService.update(Number(id), body);

    return {
      success: true,
      data: post,
      message: "Post updated successfully",
    };
  };

  async delete(ctx: Context) {
    const { id } = ctx.params;
    await postService.delete(Number(id));

    return {
      success: true,
      message: "Post deleted successfully",
    };
  };
};

export const postController = new PostController();
