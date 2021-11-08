import style from './button.module.scss'
import Link from 'next/link'
import { addCart } from '../../../../tools/addCart'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/cart'
export default function Button ({text, link, product}) {

    const [cart, setCart] = useContext(CartContext)

    return (
        <Link href={link ? link : "#"}>
    <button onClick={() => product ? addCart(product, cart, setCart) : null} className={style.button}>{text}</button>
        </Link>
    )
}