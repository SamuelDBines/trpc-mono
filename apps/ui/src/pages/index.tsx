import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const { data, isLoading } = trpc.getUserById.useQuery('hey');
  console.log(data);
  if (isLoading) return <div>Loading...</div>;

  return <div>{data?.name}</div>;
}
