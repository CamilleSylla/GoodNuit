import Title from '../title/Title'
import style from './advantages.module.scss'

export default function Advantages () {

    const imgs = [
        {
            img: "/assets/img/delivery.svg",
            label: "Lorem ipsum dolor sit amet"
        },
        {
            img: "/assets/img/eiffel.svg",
            label: "Lorem ipsum dolor sit amet"
        },
        {
            img: "/assets/img/return.svg",
            label: "Lorem ipsum dolor sit amet"
        },
    ]


    const Card = ({data, i}) => {
        return (
            <div key={i} className={style.card}>
                <img src={data.img}/>
                <p>{data.label}</p>
            </div>
        )
    }

    const Delivery = () => {

        return (
            <div className={style.delivery}>
                {imgs.map((el, i) => {
                    return <Card data={el} i={i} />
                })}
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <Title title="Le confort meme dans votre livraison" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam lacus in tellus auctor ultrices."/>
            <Delivery/>
        </section>
    )
}