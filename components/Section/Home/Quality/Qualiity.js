import Button from '../../../../theme/Button/Button'
import style from './quality.module.scss'

export default function Quality () {

    const Content = ({data, i}) => {

        return (
            <div key={i} className={style.content}>
                <span>Litterie française</span>
                <h1>La meilleur des qualitées</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod maximus tempus. Donec feugiat odio quis commodo ultricies.</p>
                <Button text='En savoir plus'/>
            </div>
        )
    }
    
    const Top = () => {
        return (
            <div className={style.top}>
                <Content/>
                <img src="https://images.unsplash.com/photo-1612650760263-2d9ec04e0717?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80"/>
            </div>
        )
    }

    const Bottom = () => {
        return (
            <div className={style.bottom}>
                <Content/>
                <img src="https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"/>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <Top/>
            <Bottom/>
        </section>
    )
}