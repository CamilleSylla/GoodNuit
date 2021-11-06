import Button from '../../../../theme/Button/Button'
import limitCaracters from '../../../../tools/limitCaracters'
import style from './popular.module.scss'
import Link from'next/link'

export default function Popular ({products}) {

    const Products = ({data, i}) => {
        return (
            <Link href={`/produits/${data.permalink}`}>
            <article key={i} className={style.card}>
                <img className={style.itemImg} src={data.image.url}/>
                <div className={style.data}>
                <h1> {limitCaracters(data.name, 18)} </h1>
                <p> {data.price.formatted_with_symbol} </p>
                <img src='/assets/img/cart.svg'/>
                </div>
            </article>
            </Link>
        )
    }

    const Content = () => {

        return (
            <article className={style.content}>
                <h1>Populaire</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod maximus tempus. Donec feugiat odio quis commodo ultricies.</p>
                <Button text='Voir le catalogue'/>
            </article>
        )
    }

    return (
        <section className={style.wrapper}>
            <Content/>
            <div className={style.cards}>
                {products.map((el, i) => {
                    return <Products data={el} i={i}/>
                })}
            </div>
        </section>
    )
}