import Head from 'next/head'
import Support from '../components/Section/Global/Support/Support'
import Banner from '../components/Section/Home/Banner/Banner'
import Popular from '../components/Section/Home/Popular/Popular'
import Quality from '../components/Section/Home/Quality/Qualiity.js'
import { commerce, items } from '../tools/commerce'

export default function Home({products}) {

  return (
    <div>
      <Head>
        <title>GoodNuit</title>
        <meta name="description" content="GoodNuit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner/>
        <Popular products={products}/>
        <Quality/>
        <Support/>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}
