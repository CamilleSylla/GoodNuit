import style from './itemlist.module.scss'
import List from './List/List'
import Resume from './Resume/Resume'

export default function ItemList () {
    return(
        <section className={style.wrapper}>
            <List/>
            <Resume/>
        </section>
    )
}