import Head from 'next/head'
import { Header } from 'src/components/Header'
import { Posts as PostsComponents } from 'src/components/Posts'


const Posts = () => {
  return (
      <div>
        <Head>
          <title>Posts Page</title>
        </Head>
        <Header/>
        <PostsComponents />
      </div>
  )
}

export default Posts