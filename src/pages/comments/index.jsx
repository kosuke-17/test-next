import Head from 'next/head'
import { Header } from 'src/components/Header'
import { Comments as CommnentsComponents } from 'src/components/Comments'


const Comments = () => {
  return (
      <div>
        <Head>
          <title>Comments Page</title>
        </Head>
        <Header/>
        <CommnentsComponents />
      </div>
  )
}

export default Comments