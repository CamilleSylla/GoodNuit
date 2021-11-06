import style from './gallery.module.scss'

export default function Gallery ({main_img, gallery}) {
    console.log(main_img, gallery);

    const Image = ({url, i}) => {
        return <img key={i} src={url}/>
    }

    const GallerySection = ({gallery}) => {
        return (
            <div className={style.gallery}>
                {gallery.map((el, i) => {
                    return <Image url={el.url} i={i}/>
                })}
            </div>
        )
    }

    return (
        <div className={style.wrapper}>
            <img src={main_img.url} className={style.main}/>
            <GallerySection gallery={gallery}/>
        </div>
    )
}