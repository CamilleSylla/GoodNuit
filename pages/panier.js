import Head from 'next/head'
import ItemList from '../components/Section/cartPage/itemList/ItemList'
import Title from '../components/Section/cartPage/Title/Ttile'
import Support from '../components/Section/Global/Support/Support'
export default function Panier () {

    return (
        <>
        <Head>
        <title>GoodNuit</title>
        <meta name="description" content="GoodNuit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Title/>
          <ItemList/>
          <Support/>
      </main>
        </>
    )
}