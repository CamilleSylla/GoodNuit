import Button from '../../../../theme/Button/Button'
import style from './popular.module.scss'

export default function Popular () {


    const data = [
        {
            name: 'Lit Complet',
            price: 349.90,
            img: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            name: 'Lit Complet',
            price: 349.90,
            img: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            name: 'Lit Complet',
            price: 349.90,
            img: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
        {
            name: 'Lit Complet',
            price: 349.90,
            img: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        },
    ]

    const Card = ({data, i}) => {
        return (
            <article key={i} className={style.card}>
                <img className={style.itemImg} src={data.img}/>
                <div className={style.data}>
                <h1> {data.name} </h1>
                <p> {data.price}€ </p>
                <img src='/assets/img/cart.svg'/>
                </div>
            </article>
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
                {data.map((el, i) => {
                    return <Card data={el} i={i}/>
                })}
            </div>
        </section>
    )
}