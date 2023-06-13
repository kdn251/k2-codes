import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const countRouter = createTRPCRouter({
  getCount: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.uniqueVisitor.findFirst();
  }),
});
