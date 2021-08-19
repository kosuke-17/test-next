import Head from 'next/head'
import { Header } from 'src/components/Header'
import { Users as UsersComponents } from 'src/components/Users'


const Users = () => {
  return (
      <div>
        <Head>
          <title>Users Page</title>
        </Head>
        <Header/>
        <UsersComponents />
      </div>
  )
}

export default Users