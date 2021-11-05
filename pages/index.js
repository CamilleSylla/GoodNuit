import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Section/Home/Banner/Banner'
import Popular from '../components/Section/Home/Popular/Popular'
import Quality from '../components/Section/Home/Quality/Qualiity.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner/>
        <Popular/>
        <Quality/>
      </main>

    </div>
  )
}
