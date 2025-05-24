import { exampleRouter } from "~/server/api/routers/example";
import { countRouter } from "~/server/api/routers/count";
import { dotfilesRouter } from "~/server/api/routers/dotfiles";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  count: countRouter,
  dotfiles: dotfilesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
