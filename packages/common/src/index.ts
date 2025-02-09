import { initTRPC } from '@trpc/server';

import { router, publicProcedure } from './trpc';



// Export type router type signature,
// NOT the router itself.

import { z } from 'zod';
export const appRouter = router({
  getUser: publicProcedure.input(z.string()).query((opts) => {
    opts.input; // string
    return { id: 1, name: 'Bilbo' };
  }),

  getUserById: publicProcedure.input(z.string()).query((opts) => {
    opts.input; // string
    return [{ id: 'hey', name: 'Bilbo' }].find(i => i.id === opts.input);
  }),

  // createUser: t.procedure
  //   .input(z.object({ name: z.string().min(5) }))
  //   .mutation(async (opts) => {
  //     // use your ORM of choice
  //     return await UserModel.create({
  //       data: opts.input,
  //     });
  //   }),
});
// export type definition of API
export type AppRouter = typeof appRouter;