import style from './button.module.scss'

export default function Button ({text}) {

    return <button className={style.button}>{text}</button>
}