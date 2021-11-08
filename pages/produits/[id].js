import Head from 'next/head'
import Support from '../../components/Section/Global/Support/Support';
import Advantages from '../../components/Section/productPage/Advantages/Advantages';
import Desc from '../../components/Section/productPage/Desc/Desc';
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
          <Desc product_desc={product.description}/>
          <Advantages/>
          <Support/>
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