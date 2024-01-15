// This is where your message router goes
// You should handle all the requests and responses related to messages here

import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const messageRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {
      // creating fake delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return `hello ${input.name}, lets pull this off together. `;
    }),
  birthday: publicProcedure
    .input(z.object({ date: z.string() }))
    .mutation(async ({ input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return `Your birthday is on ${input.date}`;
    }),
});
