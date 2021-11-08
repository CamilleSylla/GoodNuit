import style from './itemlist.module.scss'
import List from './List/List'

export default function ItemList () {
    return(
        <section className={style.wrapper}>
            <List/>
        </section>
    )
}