import style from './infos.module.scss'
import Button from '../../../Global/Button/Button'
import { useContext, useState } from 'react';
import { CartContext } from '../../../../../contexts/cart'
import { addCart } from '../../../../../tools/addCart';

export default function Infos ({product}) {

const [quantity, setQuantity] = useState(1)
const [cart, setCart] = useContext(CartContext)

const Seperator = () => {
    return <div className={style.seperator}></div>
}

const Quantity = () => {
    return (
        <div className={style.quantity}>
            <h3>Quantitées</h3>
            <div className={style.selector}>
                <img onClick={() => quantity <= product.inventory.available -1 ? setQuantity(quantity+1) : null} style={{opacity: `${quantity == product.inventory.available ? ".5" : "1"}`}} src='/assets/img/toparrow.svg'/>
                <p>{quantity}</p>
                <img onClick={() => quantity > 1 ? setQuantity(quantity-1) : null} style={{opacity: `${quantity == 1 ? ".5" : "1"}`}} src='/assets/img/botarrow.svg'/>
            </div>
            <Button product={product} text="Ajouter au panier"/>
        </div>
    )
}

const Variant = ({variant, i}) => {
    
    return (
        <div key={i} className={style.variant_section}>
            <h3>{variant.name}</h3>
            <div className={style.variant_container}>
                {variant.options.map((variant, el) => {
                    return <button  key={i}  className={style.variant}><p> {variant.name} </p></button>
                })}
            </div>
            <Seperator/>
        </div>
    )
}
    return (
        <div className={style.wrapper}>
            <h1>{product.name}</h1>
            <p className={style.price}>{product.price.formatted_with_symbol}</p>
            <Seperator/>
            {product.variant_groups.map((variant, i) => {
                return <Variant variant={variant} i={i}/>
            })}
            <Quantity/>
            
        </div>
    )

}