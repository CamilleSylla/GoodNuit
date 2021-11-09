import Head from 'next/head'
import TextSection from '../components/Section/cartPage/itemList/TextSection/TextSection';
import Support from '../components/Section/Global/Support/Support';

export default function About() {

    const content = [
        {
            img : "/assets/img/banner.jpg",
            label : "Lorem Ipsum",
            title : "Lorem Ipsum",
            desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod maximus tempus. Donec feugiat odio quis commodo ultricies.",
            imgPos : "20%",
            textPos : "60%"
        },
        {
            img : "/assets/img/banner.jpg",
            label : "Lorem Ipsum",
            title : "Lorem Ipsum",
            desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod maximus tempus. Donec feugiat odio quis commodo ultricies.",
            imgPos : "60%",
            textPos : "20%"
        },
    ]
  return (
    <div>
      <Head>
        <title>GoodNuit</title>
        <meta name="description" content="GoodNuit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          {content.map((el, i) => {
              return <TextSection data={el} i={i}/>
          })}
          
          <Support/>
      </main>
    </div>
  );
}
