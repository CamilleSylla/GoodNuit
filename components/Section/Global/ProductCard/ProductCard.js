import style from "./productcard.module.scss";
import Link from "next/link";
import limitCaracters from "../../../../tools/limitCaracters";
import { addCart } from '../../../../tools/addCart'
import {useContext} from 'react'
import {CartContext} from '../../../../contexts/cart'

export default function ProductCard({ width, display, data, i, marginLeftRight }) {
  
  const [cart, setCart] = useContext(CartContext)

  
  return (
    
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
        <Link href={`/produits/${data.permalink ? data.permalink : "#"}`}>
        <img className={style.itemImg} src={data.image.url} />
        </Link>
        <div className={style.data}>
        <Link href={`/produits/${data.permalink ? data.permalink : "#"}`}>
          <>
          <h1> {limitCaracters(data.name, 18)} </h1>
          <p> {data.price.formatted_with_symbol} </p>
          </>
        </Link>
          <img onClick={() => addCart(data, cart,setCart)} src="/assets/img/cart.svg" />
        </div>
      </article>
    
  );
}
