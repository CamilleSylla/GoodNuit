import style from './button.module.scss'
import Link from 'next/link'
export default function Button ({text, link}) {

    return (
        <Link href={link ? link : "#"}>
    <button className={style.button}>{text}</button>
        </Link>
    )
}