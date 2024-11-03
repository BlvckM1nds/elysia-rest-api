import { Elysia } from "elysia";
import { postController } from "./post.controller";

export const postRoutes = (app: Elysia) => {
  app.get("/posts", postController.getAll);
  app.get("/posts/:id", postController.getById);
  app.post("/posts", postController.create);
  app.put("/posts/:id", postController.update);
  app.delete("/posts/:id", postController.delete);
};
