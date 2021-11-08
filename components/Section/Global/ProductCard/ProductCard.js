import style from "./productcard.module.scss";
import Link from "next/link";
import limitCaracters from "../../../../tools/limitCaracters";

export default function ProductCard({ width, display, data, i, marginLeftRight }) {
  return (
    <Link href={`/produits/${data.permalink ? data.permalink : "#"}`}>
      <article
        style={{
          marginLeft: `${marginLeftRight ? marginLeftRight : null}`,
          marginRight: `${marginLeftRight ? marginLeftRight : null}`,
          display: `${display ? display : null}`,
          width: `${width ? width : "18vw"}`
        }}
        key={i}
        className={style.card}
      >
        <img className={style.itemImg} src={data.image.url} />
        <div className={style.data}>
          <h1> {limitCaracters(data.name, 18)} </h1>
          <p> {data.price.formatted_with_symbol} </p>
          <img src="/assets/img/cart.svg" />
        </div>
      </article>
    </Link>
  );
}
