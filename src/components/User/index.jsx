import Head from 'next/head'
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { user, error, isLoading } = useUser();
  

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{user.name}</title>
      </Head>
      <h1>名前：{user.name}</h1>
      <p>ユーザーネーム：{user.username}</p>
      <p>電話番号：{user.phone}</p>
    </div>
  )
}
