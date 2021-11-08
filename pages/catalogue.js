import { commerce } from "../tools/commerce";
import Head from 'next/head'
import Title from '../components/Section/Global/title/Title'
import ProductList from "../components/Section/catalogue/productList/ProductList";
import Filters from "../components/Section/catalogue/filters/Filters";

export default function Catalogue ({products, categories}) {

    return (
        <>
        <Head>
        <title>GoodNuit</title>
        <meta name="description" content="GoodNuit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Title title="La meilleure litterie à la qualité française" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a sollicitudin purus, eget rhoncus nisi."/>
            <Filters categories={categories}/>
            <ProductList products={products}/>
      </main>
        </>
    )
}

export async function getStaticProps() {
  const { data : products } = await commerce.products.list();
  const { data : categories } = await commerce.categories.list().then(cat => cat);
  return {
    props: {
      products,
      categories
    },
  };
}