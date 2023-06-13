import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const countRouter = createTRPCRouter({
  getCount: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.uniqueVisitor.findFirst();
  }),
  // incrementUniqueVisitors: publicProcedure.mutation((opts) => {
  //     return opts.ctx.prisma.uniqueVisitor.create;
  // }),
  incrementCount: publicProcedure.input(z.object({ newCount: z.number()})).mutation(({ctx, input}) => {
      console.log('new count: ' + input.newCount);
      const currentCount = ctx.prisma.uniqueVisitor.findFirst();
      ctx.prisma.uniqueVisitor.update({
        where: { id: 1 },
        data: { count: input?.newCount + 1 },
      })
      return currentCount;
  }),
});
