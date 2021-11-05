import style from './banner.module.scss'
import Button from '../../../../theme/Button/Button'

export default function Banner () {

    const Illustration = () => {
        return <img src="/assets/img/banner.jpg"/>
    }

    const Title = () => {
        return (
            <div className={style.title}>
                <h1>Reveiller vous dans la meilleur litterie</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <Button text="Voir le catalogue"/>
            </div>
        )
    }

    return (
        <section className={style.banner} >
            <Illustration/>
            <Title/>
        </section>
    )
}