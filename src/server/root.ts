import { router } from "./trpc";
import { messageRouter } from "./routers/message";
import { canvasRouter } from "./routers/canvas";
import { createTRPCNext } from "@trpc/next";

export const AppRouter = router({
  message: messageRouter,
  canvas: canvasRouter,
});

export type AppRouter = typeof AppRouter;
