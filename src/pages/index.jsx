import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'
import { Posts } from '../components/Posts'
import { useCallback, useEffect, useState } from 'react'


const Home = (props) => {
  return (
      <div className={styles.container}>
        <Head>
          <title>Index Page</title>
        </Head>
        <Header/>
        
        <Posts />
      </div>
  )
}

export default Home
