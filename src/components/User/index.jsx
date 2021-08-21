import Head from 'next/head'
import { useUser } from "src/hooks/useUser";
import { PostsByUserId } from 'src/components/Posts/PostsByUserId';

export const User = () => {
  const { data, error, isLoading } = useUser();
  

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data.name}</title>
      </Head>
      <h1>詳細</h1>
      <h2>名前：{data.name}</h2>
      <p>ユーザーネーム：{data.username}</p>
      <p>電話番号：{data.phone}</p>
      <h1>投稿</h1>
      <PostsByUserId id={data.id} />
    </div>
  )
}