import { Elysia } from "elysia";
import { postRoutes } from "../modules/post/post.routes";

const app = new Elysia();

postRoutes(app);

export default app;
