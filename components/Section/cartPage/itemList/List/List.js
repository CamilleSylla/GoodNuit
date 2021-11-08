import { useContext } from 'react'
import { CartContext } from '../../../../../contexts/cart'
import limitCaracters from '../../../../../tools/limitCaracters'
import style from './list.module.scss'

export default function List () {

    const [cart, setCart] = useContext(CartContext)
    
    return (
        <table className={style.wrapper}>
            <tr>
                <th>
                    Produit
                </th>
                <th>
                    Nom
                </th>
                <th>
                    Quantité
                </th>
                <th>
                    Prix
                </th>
                <th>
                    Supprimé
                </th>
            </tr>
            {cart.map((el, i) => {
                console.log(el);
                return (
                    <tr style={{borderTop: "1px solid rgba(grey, .5)"}} className={style.product_row}>
                <td>
                    <img  src={el.image.url}/>
                </td>
                <td>
                {limitCaracters(el.name, 10)}
                </td>
                <td>
                    Quantité
                </td>
                <td>
                    {el.price.formatted_with_symbol}
                </td>
                <td style={{textAlign: "center"}}>
                    X
                </td>
            </tr>
                )
            })}
        </table>
    )
}