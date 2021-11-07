import style from './title.module.scss'

export default function  Title ({title, para}) {

    return (
        <div className={style.wrapper}>
            <h1>{title}</h1>
            <p>{para}</p>
        </div>
    )
}