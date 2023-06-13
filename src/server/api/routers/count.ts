import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const countRouter = createTRPCRouter({
  getCount: publicProcedure.query(({ ctx }) => {
    console.log("inside getCount");
    return ctx.prisma.uniqueVisitor.findFirst();
  }),
  incrementCount: publicProcedure.mutation(({ ctx }) => {
    console.log("inside incrementCount");
    return ctx.prisma.uniqueVisitor.update({
      where: { id: 1 },
      data: { count: { increment: 1 } },
    });
  }),
  addRow: publicProcedure.mutation(({ ctx }) => {
    return ctx.prisma.uniqueVisitor.create({
      data: { count: 1 },
    });
  }),
});
