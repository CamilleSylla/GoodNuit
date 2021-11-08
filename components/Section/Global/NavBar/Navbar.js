import style from './navbar.module.scss'
import Link from 'next/link'

export default function Navbar () {

    const Hamburger =  () => {
        return (
            <div className={style.hamburger}>
                <div/>
                <div/>
                <div/>
            </div>
        )
    }

    const MenuSection = () => {
        return (
            
            <div className={style.menuSection}>
                <Hamburger/>
                <Link href="/">
                <span>GoodNuit</span>
                </Link>
            </div>
        )
    }

    const Square = ({data, i}) => {

        return (
            <div key={i} className={style.square}>
                <img src={data}/>
                <div className={style.hover}/>
            </div>
        )
    }

    const Action = () => {
        const imgIcon = ["/assets/img/search.svg","/assets/img/user.svg","/assets/img/cart.svg"]
        return (
            <div className={style.action}>
                {imgIcon.map((el, i) => {
                    return <Square data={el} i={i} />
                })}
            </div>
        )
    }

    return (
        <nav className={style.wrapper}>
            <MenuSection/>
            <Action/>
        </nav>
    )
}