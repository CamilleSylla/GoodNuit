import Button from '../../../Global/Button/Button'
import style from './textsection.module.scss'

export default function TextSection ({data, i}) {

    const Content = () => {
        return (
            <div style={{left: `${data.textPos ? data.textPos : "60%"}`}} className={style.content}>
                    <span>{data.label}</span>
                    <h1>{data.title}</h1>
                    <p>{data.desc}</p>
                    <Button text='En savoir plus'/>
                </div>
        )
    }

    const Illustration = () => {

        return (
            <div style={{left: `${data.imgPos ? data.imgPos : "20%"}`}} className={style.illustration}>
                <img src={data.img}/>
            </div>
        )
    }

    return (
        <section key={i} className={style.wrapper}>
            <Illustration/>
            <Content/>
        </section>
    )
    
}