import Title from '../../Global/title/Title'
import style from './desc.module.scss'

export default function Desc ({product_desc}) {

    const Desc = () => {

        return (
            <div className={style.desc}>
                <div dangerouslySetInnerHTML={{__html: product_desc}}/>            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <Title title="Description" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam lacus in tellus auctor ultrices."/>
            <Desc/>
        </section>
    )
}