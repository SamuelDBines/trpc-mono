import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@packages/common';

export const trpc = createTRPCReact<AppRouter>();