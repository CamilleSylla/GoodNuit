import Head from 'next/head'
import ProductSection from '../../components/Section/productPage/ProductSection/ProductSection';
import { commerce } from '../../tools/commerce';

export default function ProductPage ({product}) {
    return(
        <>
        <Head>
        <title>GoodNuit</title>
        <meta name="description" content="GoodNuit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <ProductSection product={product}/>
      </main>
        </>
    )
} 

export async function getServerSideProps ({params}) {
    const { id } = params
    const product = await commerce.products.retrieve(id, {type : 'permalink'});
    return {
        props: {
            product,
        }
    }

}