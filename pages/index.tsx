import Head from 'next/head'
import Header from "../components/Header"
import {getSession} from 'next-auth/react'
import Login from "../components/Login"
import Sidebar from "../components/Sidebar"

export default function Home({session}: any) {
  if(!session) return <Login />
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header/>

      <main className='flex'>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context: any){
  // Get the user
  const session = await getSession(context)

  return {
    props:{
      session
    }
  }
}