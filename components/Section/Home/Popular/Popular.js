
import limitCaracters from '../../../../tools/limitCaracters'
import style from './popular.module.scss'
import Button from '../../Global/Button/Button'
import ProductCard from '../../Global/ProductCard/ProductCard'

export default function Popular ({products}) {

    

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
                    return <ProductCard display="inline-block" marginLeftRight="5vh" data={el} i={i}/>
                })}
            </div>
        </section>
    )
}