import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'

const Index = (props) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header/>
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JsonplaceholderのAPIを叩いている</p>
    </div>
  )
}

export default Index