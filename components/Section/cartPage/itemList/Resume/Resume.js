import { useContext } from 'react'
import { CartContext } from '../../../../../contexts/cart'
import style from './resume.module.scss'

export default function Resume () {

    const [cart, setCart] = useContext(CartContext)
    const reducer = (previousValue, currentValue) => previousValue.price.raw + currentValue.price.raw;

    const Table = () => {
        return (
            <table>
                <tr>
                    <td></td>
                </tr>
            </table>
        )
    }

    const PurschaseBtn = () => {

        return <button>Proceder a l'achat</button>
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
            <h4>Sommaire de commande</h4>
            <div className={style.content}>
            <p>{cart.length} produit{cart.length > 1 ? "s" : null}</p>
            {cart.length ? <p>{ cart.length > 1 ? Math.round(cart.reduce(reducer) * 100)/100 : cart[0].price.raw}€</p> : null}
            {cart.length === 0 ? <p>0.00€</p> : null}
            </div>

            </div>
            <PurschaseBtn/>
        </div>
    )
}