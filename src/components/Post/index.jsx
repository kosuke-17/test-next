import { useRouter } from 'next/dist/client/router';
import Head from 'next/head'
import { CommentsByPostsId } from 'src/components/Comments/CommentsByPostsId';
import { UserByUserId } from 'src/components/User/UserByUserId';
import { usePost } from 'src/hooks/usePost';

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);
  
  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <h1>{data?.title}</h1> 
      <UserByUserId id={data.userId} />
      <CommentsByPostsId id={data.id} />
    </div>
  )
}
