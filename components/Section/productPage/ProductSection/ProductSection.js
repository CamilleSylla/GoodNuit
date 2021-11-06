import Gallery from './gallery/Gallery'
import Infos from './infos/Infos'
import style from './productSection.module.scss'

export default function ProductSection ({product}) {

    return (
        <section className={style.wrapper}>
            <Gallery main_img={product.image} gallery={product.assets}/>
            <Infos product={product}/>
        </section>
    )
}